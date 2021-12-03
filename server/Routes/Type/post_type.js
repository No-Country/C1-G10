const router = require("express").Router();
const typeController = require("../../Controllers/typeController");
const upload = require("../../cloudinary");

/* CREATE A NEW TYPE MODEL */
router.post(
  "/newTypeModel",
  upload.single("image"),
  typeController.newTypeModel
);

module.exports = router;
