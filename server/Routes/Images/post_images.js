const router = require("express").Router();
const imagesController = require("../../Controllers/imagesController");
const upload = require("../../cloudinary");

/* CREATE NEW IMAGES SET */
router.post(
  "/newImagesSet",
  upload.array("image"),
  imagesController.newImageSet
);

module.exports = router;
