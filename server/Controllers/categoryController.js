const Category = require("../Models/TravelInfo/Category");

/* CREATE A NEW CATEGORY MODEL */

exports.newCategoryModel = async (req, res, next) => {
  try {
    const { categoryName } = req.body;

    const category = new Category({
      categoryName,
    });

    await category.save();
    res.json(category);
  } catch (err) {
    res.json(next(err));
  }
};

/* GET ALL CATEGORY MODELS */

exports.getAllCategories = async (req, res, next) => {
  try {
    const category = await Category.find({});
    return res.json(category);
  } catch (err) {
    res.json(next(err));
  }
};
