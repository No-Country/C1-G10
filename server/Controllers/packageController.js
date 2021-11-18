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
        images: {
          //url: imageUrl.Location,
          description,
        },
        rating,
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
