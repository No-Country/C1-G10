const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
  destination: { type: Schema.Types.ObjectId, ref: "Destination" },
  images: [],
});

module.exports = mongoose.model("Images", ImagesSchema);
