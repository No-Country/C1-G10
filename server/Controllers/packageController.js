const Package = require("../Models/Package");

/* CREATE NEW PACKAGE */

exports.newPackage = async (req, res, next) => {
  try {
    const {
      packageName,
      description,
      rating,
      currency,
      totalCost,
      totalDays,
      remainingSpots,
    } = req.body;

    //const imageUrl = await uploadFile(req.file);

    const package = new Package({
      packageName,
      /* images: [
          {
            //url: imageUrl.Location,
            description,
          },
        ], */
      //rating,
      currency,
      totalCost,
      totalDays,
      remainingSpots,
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
    const package = await Package.find({});
    return res.json(package);
  } catch (err) {
    return res.json(next(err));
  }
};

/* GET A PACKAGE BY ID */
exports.getPackageById = async (req, res, next) => {
  try {
    const package = await Package.findById(req.params.id);
    res.json(package);
  } catch (err) {
    res.json(next(err));
  }
};

/* DELETE A PACKAGE */

exports.deleteAPackage = async (req, res, next) => {
  try {
    const package = await Package.findOneAndDelete(req.params.id);
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
    const { searchingKey, value } = req.body;
    const package = await Package.find({ [searchingKey]: value });

    res.json(package);
  } catch (err) {
    res.json(next(err));
  }
};
