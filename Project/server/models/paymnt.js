const mongoose = require("mongoose");
const request= new mongoose.Schema(
  {
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    SeminarID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'addSeminar'
    },
    amount:{
        type:Number
    },
    cvv:{        
        type:Number
    },
    cardNumber:{
        type:Number 
    },
    isRequest:{
        type:Boolean
    }
  }
);

const model = mongoose.model("paymnt",request);
module.exports = model;