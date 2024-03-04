const createError = require('../middlewares/error')
const memberService = require('../services/member-service')
const db = require('../models/prisma')

exports.getMember = async (req, res, next) => {
    try {
      const allMember = await memberService.getMember();
      res.json(allMember);
    } catch (err) {
      next(err);
    }
};

exports.updateMember = async (req, res, next) => {
  const memberId = parseInt(req.params.memberId);
  const updatedMember = req.body;
  try {
      await memberService.updateMemberById(memberId, updatedMember);
      res.json({ message: "Update Member Success" });
  } catch (err) {
      next(err);
  }
};

exports.deleteMember = async (req, res, next) => {
  const memberId = parseInt(req.params.memberId);
  try {
      await memberService.deleteMember(memberId);
      res.json({ message: "Delete Member Success" });
  } catch (err) {
      next(err);
  }
};