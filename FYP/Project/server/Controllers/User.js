const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken') 

module.exports={
    Register:async (req, res) => {
        console.log(req.body);
        try {
          await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });
          res.json({ status: "ok" });
        } catch (error) {
          res.json({ status: "error", error: "Duplicate Email" });
        }
      },
      Login:async (req, res) => {
        const user = await User.findOne({
          email: req.body.email,
          password: req.body.password,
        });
      
        if (user) {
            const token = jwt.sign(
              {
                name: user.name,
                email: user.email,
              },
             process.env.KEY
            )
          return res.send(
            {
              Token:token,
              User:user
            }
            ).status(200);
        } else {
          return res.status(500);
        }
      }
}