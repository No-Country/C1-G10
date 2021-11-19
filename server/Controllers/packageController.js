const Package = require("../Models/Package");

/* CREATE NEW PACKAGE */

exports.newPackage = [
  async (req, res, next) => {
    try {
      const { packageName, description, rating, currency, totalCost } =
        req.body;

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
      });

      await package.save();
      res.json(package);
    } catch (err) {
      res.json(next(err));
    }
  },
];

/* GET ALL PACKAGES */

exports.getAllPackages = async (req, res, next) => {
  try {
    const package = await Package.find({});
    return res.json(package);
  } catch (err) {
    return res.json(next(err));
  }
};

/* DELETE A PACKAGE */

exports.deleteAPackage = async (req, res, next) => {
  try {
    console.log("aloha");
    const package = await Package.findOneAndDelete(req.params.id);
    console.log(package);
    res.json(package);
  } catch (err) {
    res.json(next(err));
  }
};

/* UPDATE PACKAGE NAME */
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
