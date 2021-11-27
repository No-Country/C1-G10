const router = require("express").Router();
const categoryController = require("../../Controllers/categoryController");

/* GET ALL CATEGORY MODELS */
router.get("/getAllCategories", categoryController.getAllCategories);

module.exports = router;
