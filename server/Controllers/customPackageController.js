const CustomPackage = require("../Models/CustomPackage");

/* CREATE NEW PETITION MODEL */

exports.newCustomPackage = async (req, res, next) => {
  try {
    const {
      clientName,
      clientEmail,
      destination,
      type,
      category,
      membersQuantity,
      totalDays,
      date,
    } = req.body;

    const customPackage = new CustomPackage({
      clientName,
      clientEmail,
      destination,
      type,
      category,
      membersQuantity,
      totalDays,
      date,
      status: false,
    });
    await customPackage.save();
    res.json(customPackage);
  } catch (err) {
    res.json(next(err));
  }
};

/* GET ALL CUSTOM PACKAGES */

exports.getAllCustomPackages = async (req, res, next) => {
  try {
    const customPackage = await CustomPackage.find({});

    return res.json(customPackage);
  } catch (err) {
    res.json(next(err));
  }
};

/* GET A CUSTOM PACKAGE BY ID */

exports.getCustomPackageById = async (req, res, next) => {
  try {
    const customPackage = await CustomPackage.findById(req.params.id);
    res.json(customPackage);
  } catch (err) {
    res.json(next(err));
  }
};
