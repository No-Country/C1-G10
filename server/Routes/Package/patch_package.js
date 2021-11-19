const router = require("express").Router();
const packageController = require("../../Controllers/packageController");

router.patch("/updatePackage/:id", packageController.updatePackage);

module.exports = router;
