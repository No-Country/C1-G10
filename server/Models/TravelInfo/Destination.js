const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
  destinationName: String,
});

module.exports = mongoose.model("Destination", DestinationSchema);
