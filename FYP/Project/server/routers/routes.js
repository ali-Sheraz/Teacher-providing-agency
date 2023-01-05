const express = require("express");
const Router= express.Router();
const productsController=require("../Controllers/Crops")
const userController=require('../Controllers/User.js')
const isAuthenticated=require('../middleware/middleware')
Router.post("/api/register",userController.Register);
Router.post("/api/login",userController.Login);
Router.get("/allProducts",isAuthenticated,productsController.AllProducts)
Router.post("/postProducts",productsController.postProducts)
module.exports=Router