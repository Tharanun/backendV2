const db = require("../models/prisma")

exports.getMember = async () => {
    try {
      const allMember = await db.user.findMany();
      return allMember;
    } catch (err) {
      throw err;
    }
};

// Update member
exports.updateMemberById = async (memberId, updatedMember) => {
  try {
    await db.user.update({
      where: { id: memberId },
      data: {
        username: updatedMember.username,
        tel: updatedMember.tel,
        email: updatedMember.email
      },
    });
  } catch (err) {
    console.error('Update error:', err);
    throw err;
  }
};



// Delete Product
exports.deleteMember = async (memberId) => {
  try {
    await db.user.delete({
      where: { id: memberId },
    });
  } catch (err) {
    throw err;
  }
};