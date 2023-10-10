const User = require('../models/user.model.js');
const CourseTeacher = require('../models/courseTeacher.js');
const addSeminar = require('../models/addSeminar.js');
const jwt = require('jsonwebtoken');
const { set } = require('mongoose');
const Requests=require('../models/request')
const mongoose = require('mongoose');
const paymnt=require('../models/paymnt')
const path=require('path')
module.exports = {
  Register: async (req, res) => {
    console.log(req.body);
    try {
       User.create({
        Uname:req.body.Uname,
        email:req.body.email,
        password:req.body.password,
        Cpassword:req.body.Cpassword,
        img:req.body.img,
        loc:req.body.loc,
        type:req.body.type,
        isRegister:req.body.isRegister
      }).then(res => {
        console.log("res => ",res);
      }).catch(err=>{
        console.log("err => ",err);
      })
      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: "error", error: "Duplicate Email" });
    }
  },


  GetUser: async (req, res) => {
    const user = await User.findOne({ _id: req.query.ID }).populate("requests");
    return res.send(
      {
        User: user
      }
    ).status(200);
  },
 
  ///////////////get all user//////////
  Getuserers: async (req, res) => {
    try{
      const user = await User.find({type:{$in:['Student',"Teacher"]}}).populate('Seminars');
      // const user1 = await User.find({type:"Student"});
    
      return res.send(
        {
          User: user,
          // User:user1
        }
      ).status(200);
    }catch{
      res.send().status(500)
    }
   
  },
  ///////////////////////////// Searching for teacher///////////////////
  SearchTeacher: async (req, res) => {
    console.log(req.body);
    var coursename = req.params.course;
    console.log("coursename:- ", coursename)
    const user = await User.find({type:"Teacher", course: { $regex: '.*' + coursename + '.*' } })
    console.log("Searching => ", user);
    return res.send(
      {
        User: user
      }
    ).status(200);
  },
  GetTeacher: async (req, res) => {
    console.log(req.body);
    const user = await User.find({type:"Teacher"});
    return res.send(
      {
        User: user
      }
    ).status(200);
  },
    ///////////////////////////// Searching for teacher///////////////////////

  /////////////////////////
  Login: async (req, res) => {
    console.log(req.body)
    try{
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("User => ", user)
    if (user) {
      const token = jwt.sign(
        {
          name: user.Uname,
          email: user.email,
        },
        process.env.KEY
      )
      return res.send(
        {
          Token: token,
          User: user
        }
      ).status(200);
    } else {
        res.send(
        {
          message: "Invalid Credentials"
        }
      ).status(403);
    }
    }catch{
      res.send().status(500)
    }
  },
  ////////////////////////////////////Not used?????????>//////////////////////////////
  update: async (req, res) => {
    console.log(req.body)
    const User1 = await CourseTeacher.findOneAndUpdate({ _id: req.body._id }, { $set: req.body })
    try {
      await User1.save()
      console.log("Updated")
      res.send(User1).status(201)
    } catch {
      res.send({}).status(500)
    }
  },
  SearchCourseTeacher: async (req, res) => {
    console.log(req.body);
    var coursename = req.params.courseName;
    console.log("coursename:- ", coursename)
    const user = await CourseTeacher.find({ course: { $regex: '.*' + coursename + '.*' } })
    console.log("Searching => ", user);
    return res.send(
      {
        User: user
      }
    ).status(200);
  },
  GetCourseTeacher: async (req, res) => {
    console.log(req.body);
    try{
      const user = await CourseTeacher.find({});
      return res.send(
        {
          User: user
        }
      ).status(200);
    }catch{
      res.send().status(500)
    }
   
  },
  AddCouseTeacher: async (req, res) => {
    console.log(req.body);
    try {
      await CourseTeacher.create(req.body);
      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: "error", error: "Course Teacher Error!" });
    }
  },
  ////////////////////////////////////Not used?????????>//////////////////////////////

  //////////////get seminar and del///////////////////////
  Getseminar: async (req, res) => {
    console.log(req.body);
    const user = await addSeminar.find();
    return res.send(
      {
        User: user
      }
    ).status(200);
  },
  deletesem: async (req, res) => {
    console.log(req.query.id)
    const User1 = await addSeminar.deleteOne({ _id: req.query.id})

    console.log(User1);
    try {
      console.log("Deleted")
      res.send(User1).status(201)
    } catch {
      res.send({}).status(500)
    }
  },
  updseminar: async (req, res) => {
    console.log(req.body)
    const User1 = await addSeminar.findOneAndUpdate({ _id: req.body._id }, { $set: req.body })
    try {
      await User1.save()
      console.log("Updated")
      res.send(User1).status(201)
    } catch {
      res.send({}).status(500)
    }
  }, 
  ///////////////////////////////////////////////////////////
  //////////update single user//////////////////////////////
  updateUser: async (req, res) => {
    console.log(req.body)
    const User1 = await User.findOneAndUpdate({ _id: req.body._id }, { $set: req.body })
    try {
      await User1.save()
      console.log("Updated")
      res.send(User1).status(201)
    } catch {
      res.send({}).status(500)
    }

  },

  //////////update single user////////////////


  /////////////////add remaining field in user//////////////////
  updatequalification: async (req, res) => {
    console.log(req.body)
    const User1 = await User.findOneAndUpdate({ _id: req.body.ID }, {
      $set: {
        course: req.body .course,
        qualification: req.body.qualification,
        address: req.body.address,
      }
    })
    try {
      await User1.save()
      console.log("Remaining Data Added")
      res.send(User1).status(201)
    } catch {
      res.send({}).status(500)
    }

  },
  updatefeedback: async (req, res) => {
    console.log(req.body)
    const User1 = await User.findOneAndUpdate({ _id: req.body.ID }, {
      $set: {
        feedback: req.body.feedback
      }
    })
    try {
      await User1.save()
      console.log("Remaining Data Added")
      res.send(User1).status(201)
    } catch {
      res.send({}).status(500)
    }

  },
  /////////////////add remaining field in user//////////////////
  //////////////Add remain teacher qualification/////
  updateteacher: async (req, res) => {
    console.log(req.body)
    const User1 = await User.findOneAndUpdate({ _id: req.body.ID }, {
      $set: {
        course: req.body.course,
        qualification: req.body.qualification,
        experience: req.body.experience,
        address: req.body.address
      }
    })
    try {
      await User1.save()
      console.log("Remaining Data Added")
      res.send(User1).status(201)
    } catch {
      res.send({}).status(500)
    }

  },
  /////////////ADD Seminar///////////////
  // Addseminar: async (req, res) => {
  //   console.log(req.body);
  //   try {
  //     await addSeminar.create(req.body);
  //     res.json({ status: "ok" });
  //   } catch (error) {
  //     res.json({ status: "error", error: "Seminar Error!" });
  //   }
  // },
  Addseminar: async (req, res) => {
    console.log(req.body.title)
    const imageDir = path.join(__dirname, 'uploads');
    console.log(imageDir)
    console.log({
      title:req.body.title,
      description:req.body.description,
      time:req.body.time,
      paid:req.body.paid,
      img:req.body.img,
   
    });
    try {
      addSeminar.create({
        title:req.body.title,
        description:req.body.description,
        time:req.body.time,
        paid:req.body.paid,
        img:req.body.img,
      }).then(res => {
        console.log("res => ",res);
      }).catch(err=>{
        console.log("err => ",err);
      })
      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: "error", error: "Seminar Email" });
    }
  },
  recvseminar: async (req, res) => {
    const data = JSON.parse(req.query.data)
    try{
    console.log(data.seminarId)
    let mesg=""
    const user = await User.findOne({ _id: data.userID });
    if (!user.Seminars.includes(data.seminarId)) {
      user.Seminars.push(data.seminarId)
      mesg="Enrolled"
    }
    else
    {
      mesg="You Have Already Enrolled This Seminar"
    }
    await user.save()
    console.log(user)
     res.send(
      {
        User: user,
        response:mesg,
        oldLength:user.Seminars.length
      }
    ).status(200);
    }catch{
      res.send().status(500)
    }
  },
  deleteSeminar: async (req, res) => {
    const data = JSON.parse(req.query.id)
    try{
    let user = await User.findOne({ _id:data.userID});
    console.log(user)
    user.Seminars=user.Seminars.filter((semi)=>{
      return semi!=data.seminarID
    })
    console.log(user)
    await user.save()
    console.log(user)
    res.send(
      {
        User: user,
      }
    ).status(200);
    }catch{
      res.send().status(500)
    }
  },
  recUsersvseminar: async (req, res) => {
    const data = JSON.parse(req.query.data)
    console.log(data)
   await User.findOne({ _id: data.userID }).populate('Seminars').exec(function(err,user){
      console.log(err)
      console.log(user)
      if(err){
        return
      }
      else{
        res.send(
          {
            User: user,
          }
        ).status(200);
      }
    });
},
MakeRequest:async (req, res)=>{
  console.log(req.body)
  let count=await Requests.find({
    $and:[
      { UserID:req.body.User},
      {TeacherID:req.body.Teacher},
    ]
  }).count()
  console.log(count)
  if(count>=1){
    res.send().status(500)
  }
  else{
    try{
      const request=await Requests.create({
        UserID:req.body.User,
        TeacherID:req.body.Teacher,
        isRequest:false
      })
      await request.save()
      res.send().status(200)
    }catch{
      res.send().status(500)
    }
  }

},
UpdateRequest:async (req, res)=>{
  console.log(req.query.data)
  const id=JSON.parse(req.query.data)
  console.log(id)
  const teacherid=id.TeacherID
  const studentid=id.UserID
  try{
    let request = await Requests.findOne({
      $and: [
        { UserID: studentid },
        { TeacherID: teacherid },
      ]
    });
    console.log("Request",request)
    request.isRequest=true
    await request.save()
    res.send().status(200)
  }catch{
    res.send().status(500)
  }
},
GetRequest:async (req, res)=>{
  console.log(req.query.data)
  const id=JSON.parse(req.query.data)
  console.log(id.userID)
  let request=[]
  try{
    if(id.type==="teacher"){
      request=await Requests.find({TeacherID:id.userID}).populate("UserID")
      count=await Requests.find({
        $and:[
          {TeacherID:id.userID},
          {isRequest:true}
        ]
      }).count()
    }
    else{
      request=await Requests.find({UserID:id.userID})
      count=await Requests.find({
        $and:[
          {TeacherID:id.userID},
          {isRequest:true}
        ]
      }).count()
    }
    console.log(request)
    res.send({
      request,
      count
    }).status(200)
  }catch{
    res.send().status(500)
  }
},
deleteRequest:async (req, res)=>{
  const id=JSON.parse(req.query.id)
  console.log(id)
  const teacherid=id.TeacherID
  const studentid=id.UserID
  try{
    await Requests.deleteOne({
      $and: [
        { UserID: studentid },
        { TeacherID: teacherid }
      ]
    });
    res.send().status(200)
  }catch{
    res.send().status(500)
  }
},
getReq:async(req,res)=>{
console.log("hello")
  try{
    const users=await User.find({isRegister:false})
    console.log(users)
    res.send(users).status(200)
  }catch{
    res.send().status(500)
  }

},
getappro:async(req,res)=>{
console.log(req.query.id)
try{
const user=await User.findById({_id:req.query.id})
user.isRegister=true
await user.save()
res.status(200)
}catch{
res.status(400)
}
},
getdel:async(req,res)=>{
  console.log(req.query.id)
  try{
  await User.deleteOne({_id:req.query.id})
  res.status(200)
  }catch{
  res.status(400)
  }
  },
  pospayment:async(req,res)=>{
    console.log(req.body)
    try{
      const payment=paymnt.create(req.body)
      await payment.save()
      res.status(200)
    }catch{
      res.status(500)
    }
  },
  getpay:async(req,res)=>{
    console.log("hello")
      try{
        const users=await paymnt.find({isRequest:false}).populate(['UserID','SeminarID'])
        console.log(users)
        res.send(users).status(200)
      }catch{
        res.send().status(500)
      }
    
    },
  accptpay:async(req,res)=>{
    console.log(req.query.id)
    try{
    const user=await paymnt.findById({_id:req.query.id})
    user.isRequest=true
    await user.save()
    const user2=await User.findById({_id:req.query.userID})
    const Seminar=await addSeminar.findById({_id:req.query.seminarID})
    user2.Seminars.push(Seminar)
    await user2.save()
    res.status(200)
    }catch{
    res.status(400)
    }
  }
}
