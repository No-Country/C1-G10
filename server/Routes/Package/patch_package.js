const router = require("express").Router();
const packageController = require("../../Controllers/packageController");
const updatePackageValidation = require("../../Validation/PackageValidations/updatePackageValidation");

router.patch(
  "/updatePackage/:id",
  updatePackageValidation.validateUpdatePackage,
  packageController.updatePackage
);

module.exports = router;
