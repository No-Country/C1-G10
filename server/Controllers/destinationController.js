const Destination = require("../Models/TravelInfo/Destination");
const Package = require("../Models/Package");

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

/* DELETE A DESTINATION */

exports.deleteADestination = async (req, res, next) => {
  try {
    const destinations = await Destination.findByIdAndDelete(req.params.id);
    const destinationId = destinations._id;
    await Package.deleteMany({ destination: destinationId });

    res.json(destinations);
  } catch (err) {
    res.json(next(err));
  }
};
