const Destination = require("../Models/TravelInfo/Destination");

/* CREATE A NEW DESTINATION MODEL */

exports.newDestinationModel = async (req, res, next) => {
  try {
    //Creates an array with path info from multier upload.
    const pathsArray = [];
    req.files.map((file) => pathsArray.push(file.path));
    //

    const { destinationName, coordinates } = req.body;

    const destination = new Destination({
      destinationName,
      coordinates,
      images: pathsArray,
    });

    await destination.save();
    res.json(destination);
  } catch (err) {
    res.json(next(err));
  }
};

/* GET ALL DESTINATION MODELS */

exports.getAllDestinations = async (req, res, next) => {
  try {
    const destination = await Destination.find({});
    return res.json(destination);
  } catch (err) {
    res.json(next(err));
  }
};
