const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
  cloud_name: 'dzd3gpsvk', 
  api_key: '721916995517774', 
  api_secret: 'lWKmnf8lvYzGbSwovZZpNTNqjaA' 
});

module.exports = cloudinary;
