const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    Uname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    Cpassword: { type: String, required: true },
    loc: { type: String, required: true},
    type: { type: String, required: true},
    course:{type:String},
    img:{type:String},
    qualification:{type:String},
    experience:{type:String},
    address:{type:String},
    feedback:{type:String},
    isRegister:{
      type:Boolean
    },
   Seminars:[{type:mongoose.Schema.Types.ObjectId,ref:'addSeminar'}],
   requests:[{
    id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    isRequested:{
    type:Boolean
   }
    }
  ]

  }
);

const model = mongoose.model("User", User);
module.exports = model;
