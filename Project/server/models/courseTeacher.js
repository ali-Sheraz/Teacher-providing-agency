const mongoose = require("mongoose");
const CourseTeacher = new mongoose.Schema(
  {
    course: { type: String, required: true },
    name: { type: String, required: true},
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
  }
);
const model = mongoose.model("CourseTeacher", CourseTeacher);
module.exports = model;
console.log(module);
