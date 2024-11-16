import * as React from 'react';
import Table from '@mui/material/Table';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const [courseTeacher, setCourseTeacher] = useState([]);
  const [name, setname] = useState("");
  const [nameget, setget] = useState("");
  const [course, setcourse] = useState("");
  const [qualification, setqualification] = useState("");
  const [experience, setexperience] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [error, seterror] = useState({});
  const [visibility, setVisibility] = useState(false)
  const [user, setUser] = useState({})
      const history = useNavigate();
  const submit = async e => {
    e.preventDefault();
    // alert(JSON.stringify(user))
    //  LoginEntry={ email : email , password : password };
    // console.log(LoginEntry);
    // setStore([...store,LoginEntry]);
    // localStorage.setItem("store",store);
    // seterror(validation(name,course,qualification,experience));
    //  console.log(store);
    axios.put("http://localhost:1337/api/update", user).then((result) => {
      axios.get("http://localhost:1337/api/GetCourseTeacher").then((result) => {
        console.log("result => ", result?.data?.User)
        setCourseTeacher(result && result?.data?.User);
        setVisibility(false)
        setLoginError("Data Updated Successfully");
        alert("Updated")
      })
    })
  }
  //  function validation(email ,password){
  //   let letters=/^[A-Za-z]+$/;
  //      let error={};
  //      if(!name)
  //      {
  //          error.name="Name Required";
  //      }
  //      else if(!name.match(letters))
  //      {
  //        error.name="Name must only string";
  //      }
  //      else if(!course)
  //      {
  //          error.course="Course Required";
  //      }
  //      else if(!course.match(letters))
  //      {
  //        error.course="course must only string";
  //      }
  //      else if(!qualification)
  //      {
  //          error.qualification="Qualification Required";
  //      }
  //      else if(!experience)
  //      {
  //          error.experience="Experience Required"; 
  //      }
  //      else{
  //       axios.post("http://localhost:1337/api/courseTeacher",{name,course,qualification,experience}).then((res)=>{
  //         console.log("Response => ",res);
  //         error.check="Data Added Successfully"
  //         alert("Inserted")
  //       }).catch(err =>{
  //         console.log("err => ",err);
  //       })

  //      }
  // //      else
  // //      {
  // //       console.log("Email calling")
  // //        axios.post('http://localhost:1337/api/login', {email ,password}).then((result)=>{
  // //         console.log(result)
  // //         alert("Loged in")
  // //         history('/formsucces');
  // //       }).catch((error)=>{
  // //         console.log(error)
  // //         error.check="invalid Credentials"
  // //       })
  // //     //      if(getuserarr && getuserarr.length)
  // //     //      {      
  // //     //          const userdata=JSON.parse(getuserarr); 
  // //     //          // console.log(userdata);
  // //     //          const userlogin=userdata.filter((el,k)=>{
  // //     //               return el.email===values.email && el.password===values.password  
  // //     //          });
  // //     //          console.log(userlogin);
  // //     //          if(userlogin.length===0)
  // //     //          {
  // //     //              error.check="Invalid Detail";
  // //     //          }
  // //     //          else
  // //     //          {
  // //     //              console.log("login successfully");
  // //     //              localStorage.setItem("User_login",JSON.stringify(getuserarr));
  // //     //             history('/formsucces');
  // //     //          }
  // //     //  }
  // //  }
  //      return error;
  //  }
  const updationHandlder = (event, user) => {
    setVisibility(true)
    console.log(user)
    setUser(user)

  }
  useEffect(() => {
    axios.get("http://localhost:1337/api/GetCourseTeacher").then((result) => {
      console.log("result => ", result?.data?.User)
      setCourseTeacher(result && result?.data?.User);
    })
  }, [])
  const su = () => {
    history('/ans');
  }
  return (
    <>
      <div className='home' style={{ height: "100px", width: "1320px", backgroundColor: "#FAF9F6" }}>

        <div style={{ marginLeft: "200px", paddingTop: "23px", fontSize: "xx-large" }}>
          <h4>Expert Hub</h4>
        </div>
        <div style={{ marginLeft: "230px", fontSize: "small", fontWeight: "600" }}>
          <p>Teacher Provider</p>
        </div>
        <div className="fg" style={{ marginLeft: "425px", fontSize: "large", fontWeight: "inherit", marginTop: "-40px" }}>
          <p onClick={su}>What Is Expert Hub?</p>
        </div>

        {/* <div className="hom" style={{ marginLeft: "1100px", fontSize: "large", fontWeight: "inherit", marginTop: "-30px" }}>
<button>Admin</button>
</div>
<div className="hom" style={{ marginLeft: "940px", fontSize: "large", fontWeight: "inherit", marginTop: "-38px" }}>
<button onClick={suw}>User</button>
</div> */}

      </div>
      <TableContainer component={Paper} sx={{ borderRadius: 10, marginTop: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#007FFF" }}>
              <TableCell  >ID </TableCell>
              <TableCell sx={{ color: "white" }} align="right">Name</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Course</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Qualification</TableCell>
              <TableCell sx={{ color: "white" }} align="right">Experience</TableCell>
              <TableCell sx={{ color: "white" }} align="right">UpdateInfo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseTeacher && courseTeacher.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell >{index + 1}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.qualification}</TableCell>
                <TableCell align="right">{row.experience}</TableCell>
                <TableCell align="right"><button onClick={(event) => updationHandlder(event, row)}>Update</button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {console.log("User  => ", user)}
      <>
        {
          visibility && <div style={{ marginLeft: "500px" }}>
            <h1 style={{ marginLeft: "60px" }} >UPDATION</h1><br /><br />
            <label htmlFor='name'>Name</label><br /><br />
            <input type="text" name="name" id="name" placeholder={user?.name} size="40" onChange={(e) => setUser({ ...user, name: e.target.value })}></input><br /><br />
            {error.Uname && <p style={{ color: 'red' }}>{error.Uname}</p>}
            <label>Course</label><br /><br />
            <input type="text" name="course" id="course" placeholder={user?.course} size="40" onChange={(e) => setUser({ ...user, course: e.target.value })}></input><br /><br />
            {error.course && <p style={{ color: 'red' }}>{error.course}</p>}
            <label>Qualification</label><br /><br />
            <input type="text" name="qualification" id="qualification" placeholder={user?.qualification} size="40" onChange={(e) => setUser({ ...user, qualification: e.target.value })}></input><br /><br />
            {error.qualification && <p style={{ color: 'red' }}>{error.qualification}</p>}
            <label>Experience</label><br /><br />
            <input type="text" name="experience" id="experience" placeholder={user?.experience} size="40" onChange={(e) => setUser({ ...user, experience: e.target.value })}></input><br /><br />
            {error.qualification && <p style={{ color: 'red' }}>{error.qualification}</p>}
            <button name="check" id="check" onClick={submit} style={{ marginLeft: "60px" }} >Update</button><br /><br />
            <span> {loginError && <p>{loginError}</p>}</span>
          </div>
        }
      </>
    </>
  );

}
