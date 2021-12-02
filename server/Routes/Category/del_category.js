const router = require("express").Router();
const categoryController = require("../../Controllers/categoryController");

/* DELETE CATEGORY MODEL */

router.delete("/deleteCategory/:id", categoryController.deleteACategory);

module.exports = router;
