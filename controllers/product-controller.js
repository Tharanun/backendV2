const createError = require('../middlewares/error')
const productService = require('../services/product-service')
const db = require('../models/prisma');
const cloudUpload = require('../utils/cloudUpload');
const fs = require ("fs")


// Create Product
exports.createProduct = async (req, res, next) => {
  let imgUrl;

  const { productName, amountProduct, price, cost, details } = req.body;

  try {
      if (!productName || !amountProduct || !price || !cost || !details) {
          return res.status(400).json(createError(400, 'Please provide all required information'));
      }

      try {
          if (!req.file) {
              return res.status(400).json({ message: 'No image uploaded' });
          }

          console.log(req.file.path);
          imgUrl = await cloudUpload(req.file.path);

          if (!imgUrl) {
              return res.status(400).json({ message: 'Error uploading image' });
          }

          if (fs.existsSync(req.file.path)) {
              fs.unlink(req.file.path, (err) => {
                  if (err) {
                      console.error('Failed to delete file:', err);
                      return res.status(500).json(createError(500, 'Internal Server Error'));
                  }
                  console.log('File deleted successfully');
              });
          } else {
              console.log('File does not exist');
          }

          console.log(imgUrl);
      } catch (err) {
          return next(err);
      }

      await productService.createProduct(
          productName,
          String(imgUrl),
          parseInt(amountProduct),
          parseInt(price),
          parseInt(cost),
          details
      );

      res.json({ message: 'Create Product Success' });
  } catch (err) {
      return next(err);
  }
};


exports.getProduct = async (req, res, next) => {
    try {
      const allProducts = await productService.getProduct();
      res.json(allProducts);
    } catch (err) {
      next(err);
    }
};

exports.updateProduct = async (req, res, next) => {
    const productId = parseInt(req.params.productId);
    const updatedProduct = req.body;
    try {
        await productService.updateProductById(productId, updatedProduct);
        res.json({ message: "Update Product Success" });
    } catch (err) {
        next(err);
    }
};

exports.deleteProduct = async (req, res, next) => {
    const productId = parseInt(req.params.productId);
    try {
        await productService.deleteProduct(productId);
        res.json({ message: "Delete Product Success" });
    } catch (err) {
        next(err);
    }
};

exports.getProductById = async (req, res, next) => {
    const productId = parseInt(req.params.productId);
    try {
      const product = await productService.getProductById(productId);
      res.json(product);
    } catch (err) {
      next(err);
    }
  };