const Package = require("../Models/Package");
const Destination = require("../Models/TravelInfo/Destination");
const Category = require("../Models/TravelInfo/Category");
const Type = require("../Models/TravelInfo/Type");
const { Query } = require("mongoose");
/* CREATE NEW PACKAGE */

exports.newPackage = async (req, res, next) => {
  try {
    const {
      destinationId,
      categoryId,
      typeId,
      packageName,
      description,
      rating,
      currency,
      totalCost,
      totalDays,
      remainingSpots,
    } = req.body;

    const destination = await Destination.findById(destinationId);
    const category = await Category.findById(categoryId);
    const type = await Type.findById(typeId);

    const package = new Package({
      packageName,
      images: destination.images,
      description,
      //rating,
      currency,
      totalCost,
      totalDays,
      remainingSpots,
      destination,
      category,
      type,
    });

    await package.save();
    res.json(package);
  } catch (err) {
    res.json(next(err));
  }
};

/* GET ALL PACKAGES */

exports.getAllPackages = async (req, res, next) => {
  try {
    const package = await Package.find({})
      .populate("type")
      .populate("destination")
      .populate("category");
    return res.json(package);
  } catch (err) {
    return res.json(next(err));
  }
};

/* GET A PACKAGE BY ID */
exports.getPackageById = async (req, res, next) => {
  try {
    const package = await Package.findById(req.params.id)
      .populate("type")
      .populate("destination")
      .populate("category");
    res.json(package);
  } catch (err) {
    res.json(next(err));
  }
};

/* DELETE A PACKAGE */

exports.deleteAPackage = async (req, res, next) => {
  try {
    const package = await Package.findByIdAndDelete(req.params.id);
    res.json(package);
  } catch (err) {
    res.json(next(err));
  }
};

/* UPDATE PACKAGE */
exports.updatePackage = async (req, res, next) => {
  const { packageName, currency, totalCost } = req.body;

  try {
    const package = await Package.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          packageName,
          currency,
          totalCost,
        },
      },
      { new: true }
    );
    res.json(package);
  } catch (err) {
    res.json(next(err));
  }
};

/* PACKAGE'S FILTER */
//Will make a search in the DB with the searching key
//gived and return an array of matching packages.
exports.packageFilter = async (req, res, next) => {
  try {
    const { searchingKey, value } = req.query;
    console.log(searchingKey, value);
    if (searchingKey === "totalDays") {
      if (value === "1-5") {
        const package = await Package.find({
          [searchingKey]: { $lte: 5, $gte: 1 },
        });
        res.json(package);
      } else if (value === "6-10") {
        const package = await Package.find({
          [searchingKey]: { $gte: 6, $lte: 10 },
        });
        res.json(package);
      } else if (value === "11-15") {
        const package = await Package.find({
          [searchingKey]: { $lte: 15, $gte: 11 },
        });
        res.json(package);
      } else {
        const package = await Package.find({
          [searchingKey]: { $gte: 16 },
        });
        res.json(package);
      }
    } else {
      const package = await Package.find({
        [searchingKey]: value,
      });
      res.json(package);
    }
  } catch (err) {
    res.json(next(err));
  }
};
