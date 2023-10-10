const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
require('./db/mongoose')
const UserRouter=require('./routers/routes')

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))
//Routers
app.use(UserRouter)

app.listen(process.env.PORT, () => {
  console.log("Server started  on 1337");
});
