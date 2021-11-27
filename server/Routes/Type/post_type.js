const router = require("express").Router();
const typeController = require("../../Controllers/typeController");

/* CREATE A NEW TYPE MODEL */
router.post("/newTypeModel", typeController.newTypeModel);

module.exports = router;
