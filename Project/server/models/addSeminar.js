
const mongoose = require("mongoose");
const addSeminar = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true},
    time: { type: String, required: true },
    paid: { type: String, required: true },
    img:{type:String},
  }
);
const model = mongoose.model("addSeminar", addSeminar);
module.exports = model;
console.log(module);