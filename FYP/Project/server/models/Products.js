const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    price:{type:Number,required:true}
  },
);

const model = mongoose.model("products",productsSchema);
module.exports = model;
