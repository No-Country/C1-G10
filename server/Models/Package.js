const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  packageName: String,
  images: [
    {
      url: imageUrl.Location,
      description: String,
    },
  ],
  rating: [],
  currency: String,
  totalCost: Number,
  //travelInfo are keys/categories for the search tab.
  /* travelInfo: {
    destination: String, //Country, city, etc...
    type: String, //Type of travel. Familiar, adventure, honeymoon, etc...
    costsType: String, //Standard, Expensive, Luxury, etc..
    travelDuration: String,
    spots: Number,
  }, */
});

module.exports = mongoose.model("Package", PackageSchema);
