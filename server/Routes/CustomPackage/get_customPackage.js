const router = require("express").Router();
const customPackageController = require("../../Controllers/customPackageController");

/* GET ALL CUSTOM PACKAGE MODELS */

router.get(
  "/getAllCustomPackages",
  customPackageController.getAllCustomPackages
);

/* GET A CUSTOM PACKAGE BY ID */
router.get(
  "/getACustomPackage/:id",
  customPackageController.getCustomPackageById
);

module.exports = router;
