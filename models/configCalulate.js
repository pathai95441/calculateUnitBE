const mongoose = require("mongoose");

var Schema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    unit101_150 : { type: Number, require: true },
    unit151_400 : { type: Number, require: true },
    unit401 : { type: Number, require: true },
    createAt : {type: Date , default: Date.now()},
    updateAt : {type: Date , default: Date.now()}
  },
  { collection: "configCalulate" }
);

module.exports = mongoose.model("configCalulate", Schema);