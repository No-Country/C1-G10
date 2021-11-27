const router = require("express").Router();
const packageController = require("../../Controllers/packageController");

/* DELETE A PACKAGE */

router.delete("/delPackage/:id", packageController.deleteAPackage);

module.exports = router;
