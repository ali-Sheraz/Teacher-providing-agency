const express = require("express");
const Router= express.Router();
const userController=require('../Controllers/User.js')
const isAuthenticated=require('../middleware/middleware')
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/Users/sherazali/Downloads/sheraz/Project/server/uploads");
  },
  filename: (re, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
Router.post("/api/register",upload.single("uploadedImage"),userController.Register);
Router.post("/api/login",userController.Login);
Router.put("/api/update",userController.update);
Router.delete("/api/deletesem",userController.deletesem);

Router.post("/api/courseTeacher",userController.AddCouseTeacher);

Router.get("/api/Getuserers",userController.Getuserers);

Router.post("/api/addseminar",upload.single("uploadedImage"),userController.Addseminar);
Router.get("/api/Getseminar",userController.Getseminar);
Router.put("/api/updseminar",userController.updseminar);

Router.get("/api/recvseminar",userController.recvseminar);
Router.get("/api/recUsersvseminar",userController.recUsersvseminar);

Router.post("/api/updateData",userController.updatequalification);
Router.post("/api/updatefeedback",userController.updatefeedback);
Router.post("/api/updateTeacher",userController.updateteacher);
Router.post("/api/MakeRequest",userController.MakeRequest);
Router.put("/api/UpdateRequest",userController.UpdateRequest);
Router.delete("/api/deleterequest",userController.deleteRequest)



Router.put("/api/updateUser",userController.updateUser);
Router.get("/api/singleUser",userController.GetUser);
Router.delete("/api/deleteSeminar",userController.deleteSeminar);
Router.get("/api/SearchCourseTeacher/:courseName",userController.SearchCourseTeacher);
Router.get("/api/GetCourseTeacher",userController.GetCourseTeacher);

Router.get("/api/SearchTeacher/:course",userController.SearchTeacher);
Router.get("/api/GetTeacher",userController.GetTeacher);
Router.get("/api/GetRequest",userController.GetRequest)
Router.get("/api/getReq",userController.getReq)
Router.put("/api/getappro",userController.getappro)
Router.delete("/api/getdel",userController.getdel)
Router.post("/api/pospaymnt",userController.pospayment)
Router.get("/api/getpay",userController.getpay)
Router.put("/api/accptpay",userController.accptpay)
module.exports=Router