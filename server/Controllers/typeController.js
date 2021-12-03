const Type = require("../Models/TravelInfo/Type");
const Package = require("../Models/Package");

/* CREATE A NEW TYPE MODEL */

exports.newTypeModel = async (req, res, next) => {
  try {
    const { typeName } = req.body;

    const type = new Type({
      typeName,
      image: req.file.path,
    });

    await type.save();
    res.json(type);
  } catch (err) {
    res.json(next(err));
  }
};

/* GET ALL TYPE MODELS */

exports.getAllTypes = async (req, res, next) => {
  try {
    const type = await Type.find({});
    return res.json(type);
  } catch (err) {
    res.json(next(err));
  }
};

/* DELETE A TYPE MODEL */

exports.deleteAType = async (req, res, next) => {
  try {
    const types = await Type.findByIdAndDelete(req.params.id);

    const typeId = types._id;
    await Package.deleteMany({ type: typeId });

    res.json(types);
  } catch (err) {
    res.json(next(err));
  }
};
