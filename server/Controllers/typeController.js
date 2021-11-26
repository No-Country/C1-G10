const Type = require("../Models/TravelInfo/Type");

/* CREATE A NEW TYPE MODEL */

exports.newTypeModel = async (req, res, next) => {
  try {
    const { typeName } = req.body;

    const type = new Type({
      typeName,
    });

    await type.save();
    res.json(type);
  } catch (err) {
    res.json(next(err));
  }
};
