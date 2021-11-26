const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
  destination: String,
  images: [],
});

module.exports = mongoose.model("Images", ImagesSchema);
