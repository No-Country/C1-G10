const Category = require("../Models/TravelInfo/Category");
const Package = require("../Models/Package");

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

/* DELETE A CATEGORY MODEL */

exports.deleteACategory = async (req, res, next) => {
  try {
    const categorys = await Category.findByIdAndDelete(req.params.id);

    const categoryId = categorys._id;
    await Package.deleteMany({ category: categoryId });

    res.json(categorys);
  } catch (err) {
    res.json(next(err));
  }
};
