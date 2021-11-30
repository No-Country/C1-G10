const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  packageName: String,
  images: [],
  description: String,
  //rating: [],
  currency: String,
  totalCost: Number,
  remainingSpots: Number,
  totalDays: Number,
  destination: { type: Schema.Types.ObjectId, ref: "Destination" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  type: { type: Schema.Types.ObjectId, ref: "Type" },
});
module.exports = mongoose.model("Package", PackageSchema);
