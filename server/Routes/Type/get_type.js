const router = require("express").Router();
const typeController = require("../../Controllers/typeController");

/* GET ALL TYPE MODELS */

router.get("/getAllTypes", typeController.getAllTypes);

module.exports = router;
