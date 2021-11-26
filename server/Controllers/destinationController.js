const Destination = require("../Models/TravelInfo/Destination");

/* CREATE A NEW DESTINATION MODEL */

exports.newDestinationModel = async (req, res, next) => {
  try {
    const { destinationName } = req.body;

    const destination = new Destination({
      destinationName,
    });

    await destination.save();
    res.json(destination);
  } catch (err) {
    res.json(next(err));
  }
};
