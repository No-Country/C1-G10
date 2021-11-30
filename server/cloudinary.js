const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "tourpage",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Tour Page",
  },
});

const upload = multer({ storage: storage });

/* UPLOAD FILE */
/* function uploadFile(url, imgName) {
  cloudinary.v2.uploader.upload(
    url,
    { public_id: imgName },
    function (error, result) {
      console.log(result);
    }
  );
} */

module.exports = upload;
