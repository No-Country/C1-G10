const Images = require("../Models/Images");
const Destination = require("../Models/TravelInfo/Destination");

/* CREATE NEW DESTINATION'S IMAGE ARRAY */

exports.newImageSet = async (req, res, next) => {
  try {
    //Creates an array with path info from multier upload.
    const pathsArray = [];
    req.files.map((file) => pathsArray.push(file.path));
    //
    const { destinationId } = req.body;
    const destination = await Destination.findById(destinationId);
    console.log(destination);
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
