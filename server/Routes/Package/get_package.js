const router = require("express").Router();
const packageController = require("../../Controllers/packageController");

/* GET ALL PACKAGES */
router.get("/getAllPackages", packageController.getAllPackages);

/* GET A PACKAGE BY ID */
router.get("/getAPackage/:id", packageController.getPackageById);

/* GET FILTERED PACKAGES */
router.get("/getFilteredPackages", packageController.packageFilter);

module.exports = router;
