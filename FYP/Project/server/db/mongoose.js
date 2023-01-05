
const mongoose = require("mongoose");
module.exports=mongoose.connect(process.env.URL).then(()=>{
    console.log("connected")
  }).catch((error)=>{
    console.log("not connected")
  });