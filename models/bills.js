const mongoose = require("mongoose");

var Schema = new mongoose.Schema(
  {
    unit: { type: Number, require: true },
    bahtPerUnit: { type: Number, require: true },
    resultCalulate : { type: Number, require: true },
    createAt : {type: Date , default: Date.now()}
  },
  { collection: "bills" }
);

module.exports = mongoose.model("bills", Schema);