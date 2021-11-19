const router = require("express").Router();
const packageController = require("../../Controllers/packageController");

/* GET ALL PACKAGES */

router.get("/getAllPackages", packageController.getAllPackages);

module.exports = router;
