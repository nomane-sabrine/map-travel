const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    Username: String,
    Title: String,
    Description: String,
    Rate: Number,
    altitude: Number,
    longitude: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pin", PinSchema);
