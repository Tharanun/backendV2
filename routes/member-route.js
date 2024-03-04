const express = require("express")
const router = express.Router();
const memberController = require('../controllers/member-controller')

// get
router.get('/memberAll', memberController.getMember)

// Update Product
router.put('/update/:memberId', memberController.updateMember);

router.delete('/delete/:memberId', memberController.deleteMember)

module.exports = router