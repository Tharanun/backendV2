const db = require("../models/prisma")

exports.createProduct = (productName, productImg, amountProduct, price, cost, details) =>{
    return db.product.create({
      data : {
        productName,
        productImg,
        amountProduct,
        price,
        cost,
        details
      }
    })
  }

  exports.getProduct = async () => {
    try {
      const allProducts = await db.product.findMany();
      return allProducts;
    } catch (err) {
      throw err;
    }
  };

// Update Product
exports.updateProductById = async (productId, updatedProduct) => {
  try {
    await db.product.update({
      where: { id: productId },
      data: {
        productName: updatedProduct.productName,
        productImg: updatedProduct.productImg,
        amountProduct: updatedProduct.amountProduct,
        price: updatedProduct.price,
        cost: updatedProduct.cost,
        details: updatedProduct.details,
      },
    });
  } catch (err) {
    throw err;
  }
};

// Delete Product
exports.deleteProduct = async (productId) => {
  try {
    await db.product.delete({
      where: { id: productId },
    });
  } catch (err) {
    throw err;
  }
};

// get product by id
exports.getProductById = async (productId) => {
  try {
    const product = await db.product.findUnique({
      where: { id: productId },
    });
    return product;
  } catch (err) {
    throw err;
  }
};