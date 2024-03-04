const db = require("../models/prisma");

exports.createSell = (amount, userId, adminId, productId) => {
  return db.sell.create({
    data: {
      amount,
      user: { connect: { id: userId } },
      admin: { connect: { id: adminId } },
      product: { connect: { id: productId } }
    },
  });
};

// GET
exports.getSell = async () => {
  try {
    const allSell = await db.sell.findMany();
    return allSell;
  } catch (err) {
    throw err;
  }
};

// Delete Sell
exports.deleteSell = async (sellId) => {
  try {
    await db.sell.delete({
      where: { id: sellId },
    });
  } catch (err) {
    throw err;
  }
};