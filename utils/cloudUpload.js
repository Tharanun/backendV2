const cloudinary = require("../config/cloudinary");


const cloudUpload = async (path) => {
    try {
        const res = await cloudinary.uploader.upload(path);
      return res.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw error;  // ให้ throw error ที่นี่เพื่อให้ express จัดการ
    }
};

module.exports = cloudUpload;
