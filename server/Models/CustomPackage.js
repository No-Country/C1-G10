const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*  MODEL FOR THE CUSTOM PACKAGES PETITIONS FROM CLIENTS */

const CustomPackageSchema = new Schema({
  clientName: String,
  clientEmail: String,
  destination: String,
  type: String,
  category: String,
  membersQuantity: Number,
  totalDays: Number,
  date: String,
  status: Boolean,
});

module.exports = mongoose.model("CustomPackage", CustomPackageSchema);
