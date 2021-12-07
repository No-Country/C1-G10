const router = require("express").Router();
const customPackageController = require("../../Controllers/customPackageController");

/* CREATE A NEW PETITION MODEL */

router.post("/newCustomPackage", customPackageController.newCustomPackage);

module.exports = router;
