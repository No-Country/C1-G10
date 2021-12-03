const router = require("express").Router();
const packageController = require("../../Controllers/packageController");
const newPackageValidation = require("../../Validation/PackageValidations/newPackageValidation");
const upload = require("../../cloudinary");

/* CREATE NEW PACKAGE */
router.post(
  "/newPackage",
  upload.single("image"),
  newPackageValidation.validateNewPackage,
  packageController.newPackage
);

module.exports = router;
