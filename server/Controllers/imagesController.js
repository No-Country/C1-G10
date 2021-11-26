const Images = require("../Models/Images");

/* CREATE NEW DESTINATION'S IMAGE ARRAY */

exports.newImageSet = async (req, res, next) => {
  try {
    //Creates an array with path info from multier upload.
    const pathsArray = [];
    req.files.map((file) => pathsArray.push(file.path));
    const { destination } = req.body;

    const image = new Images({
      destination,
      images: pathsArray,
    });

    await image.save();
    res.json(image);
  } catch (err) {
    res.json(next(err));
  }
};
