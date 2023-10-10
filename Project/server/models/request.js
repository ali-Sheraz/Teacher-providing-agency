const mongoose = require("mongoose");
const request= new mongoose.Schema(
  {
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    TeacherID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    isRequest:{
        type:Boolean
    }
  }
);

const model = mongoose.model("Request",request);
module.exports = model;
