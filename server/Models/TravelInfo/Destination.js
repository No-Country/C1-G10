const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
  destinationName: String,
  coordinates: [],
  images: [],
});

module.exports = mongoose.model("Destination", DestinationSchema);
