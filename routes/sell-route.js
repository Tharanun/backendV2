const express = require("express")
const router = express.Router()
const sellController = require("../controllers/sell-controller")

router.post('/create',sellController.sellCreate)

router.get('/sellAll', sellController.getSell)

// Delete Product
router.delete('/delete/:sellId', sellController.deleteSell);

module.exports = router;