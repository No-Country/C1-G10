const router = require("express").Router();
const categoryController = require("../../Controllers/categoryController");

/* CREATE A NEW CATEGORY MODEL */
router.post("/newCategoryModel", categoryController.newCategoryModel);

module.exports = router;
