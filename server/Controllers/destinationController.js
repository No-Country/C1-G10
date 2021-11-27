const Destination = require("../Models/TravelInfo/Destination");

/* CREATE A NEW DESTINATION MODEL */

exports.newDestinationModel = async (req, res, next) => {
  try {
    const { destinationName, coordinates } = req.body;

    const destination = new Destination({
      destinationName,
      coordinates,
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
