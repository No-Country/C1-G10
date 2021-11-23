const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  packageName: String,
  images: [
    {
      //url: String,
      description: String,
    },
  ],
  rating: [],
  currency: String,
  totalCost: Number,
  remainingSpots: String,
  totalDays: Number,
});
module.exports = mongoose.model("Package", PackageSchema);
