const createError = require('../middlewares/error')
const sellService = require('../services/sell-service')

exports.sellCreate = async (req, res, next) => {
    const {amount, userId, adminId, productId} = req.body;
    try {
        if(!amount || !userId || !adminId || !productId){
            return createError(400, 'ใส่ข้อมูลให้ครบด้วยครับ')
        }
        await sellService.createSell(
            amount, 
            userId, 
            adminId, 
            productId
        )
        res.json({message: "Create Product Success"})
    } catch (err) {
        next(err)
    }
}

exports.getSell = async (req, res, next) => {
    try {
      const allSell = await sellService.getSell();
      res.json(allSell);
    } catch (err) {
      next(err);
    }
};

// Delete Sell
exports.deleteSell = async (req, res, next) => {
    const sellId = parseInt(req.params.sellId);
    try {
        await sellService.deleteSell(sellId);
        res.json({ message: "Delete Sell Success" });
    } catch (err) {
        next(err);
    }
};