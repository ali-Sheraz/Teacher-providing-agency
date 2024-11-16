import * as React from 'react';
import Table from '@mui/material/Table';
import { useEffect, useState } from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WindowIcon from '@mui/icons-material/Window';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import PaymentIcon from '@mui/icons-material/Payment';
export default function BasicTable() {
    const [nameget, setget] = useState("");

    const [typeget, settype] = useState("");
    const [img, setimg] = useState("")
    // const [courseTeacher, setCourseTeacher] = useState([
    //     {
    //         name: JSON.parse(localStorage.getItem("UserData")).name,
    //         qualification: JSON.parse(localStorage.getItem("UserData")).qualification,
    //         course: JSON.parse(localStorage.getItem("UserData")).couse,
    //         experience: JSON.parse(localStorage.getItem("UserData")).name
    //     }
    // ]);
    //   const [Uname, setname] = useState("");
    //   const [nameget, setget] = useState("");
    //   const [course, setcourse] = useState("");
    //   const [qualification, setqualification] = useState("");
    //   const [experience, setexperience] = useState("");
    const [loc, setloc] = useState("");
    const history = useNavigate();
    const [update, setUpdate] = useState({})
    const [loginError, setLoginError] = useState(null);
    const [error, seterror] = useState({});
    const [visibility, setVisibility] = useState(false)
    const [courseTeacher, setCourseTeacher] = useState([]);
    const [user, setUser] = useState({})
    const submit = async e => {
        e.preventDefault();
        // alert(JSON.stringify(user))
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        // localStorage.setItem("store",store);
        // seterror(validation(name,course,qualification,experience));
        //  console.log(store);
        console.log(user)
        axios.put("http://localhost:1337/api/updateUser", user).then((result) => {
            axios.get("http://localhost:1337/api/getuserers").then((result) => {
                console.log("result => ", result?.data?.User)
                setCourseTeacher(result && result?.data?.User);
                setVisibility(false)
                //   setUpdate(result.data)
                //   localStorage.setItem("UserData", JSON.stringify(user))
                setLoginError("Data Updated Successfully");
                alert("Updated")
            })
        })
        // axios.put("http://localhost:1337/api/updateUser", user).then((result) => {
        //     console.log(result.data)
        //     console.log(user);
        //     setUser(result.data);
        //     setUpdate(result.data)
        //     localStorage.setItem("UserData", JSON.stringify(user))
        //     console.log(user)
        //     setVisibility(false)
        //     setLoginError("Data Updated Successfully");
        //     alert("Updated")
        //     console.log(user)
        // })
    }
    const next = () => {
        history('/managestudent');
    }
    const logout = () => {
        // localStorage.removeItem("User_login");
        history('/adminlogin');
    }
    const styles = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-360%',
            marginTop: '180%',
            size: '90px'
        }
    }
    const style = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const styl = {
        tr: {
            // background: "white",
            '&:hover': {
                // background: '#FF2E2E',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '25%',
            // marginTop: '1%',
            fontSize: '250%'
        }
    }
    const sty = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const st = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const s = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const pass = () => {
        history('/changepassad');
    }
    const su = () => {
        history('/ans');
    }
    const p = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const view = () => {
        history('/viewadmin');
    }

    const home = () => {
        history('/seminar');
    }
    const search = () => {
        history('/updstutea');
    }
    const l = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const lear = () => {
        history('/showseminar');
    }
    useEffect(() => {
        axios.get("http://localhost:1337/api/Getuserers").then((result) => {
            console.log("result => ", result?.data?.User)
            setCourseTeacher(result && result?.data?.User);
        })
    }, [])
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
        setUser(user)
    }
    useEffect(() => {
        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
        console.log(JSON.parse(getuserarr).Uname)
        let obj8 = JSON.parse(getuserarr).img
        setimg(obj8)
        setget(obj);
        let obj1 = JSON.parse(getuserarr).type
        settype(obj1);
        let obj2 = JSON.parse(getuserarr).img;
        setimg(obj2)
        // setUser({
        //     ID: JSON.parse(localStorage.getItem("UserData"))._id,
        //     Uname: JSON.parse(localStorage.getItem("UserData")).Uname,
        //     email: JSON.parse(localStorage.getItem("UserData")).email,
        //     loc: JSON.parse(localStorage.getItem("UserData")).loc,
        //     course: JSON.parse(localStorage.getItem("UserData")).course,
        //     qualification: JSON.parse(localStorage.getItem("UserData")).qualification,
        //     address: JSON.parse(localStorage.getItem("UserData")).address,
        // })
    }, [])
    const hm = () => {
        history('/adminlogin');
    }
    const up = () => {
        history('/updadmin');
    }
    const h = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const k = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const ar = () => {
        history('/verification');
    }
    const i = {
        tr: {
            background: "gray",
            '&:hover': {
                background: '#FFBF00',
                transform: 'scale(1.2)',
            },
            transition: 'transform 500ms ease',
            marginLeft: '-330%',
            marginTop: '110%',
            size: '90px'
        }
    }
    const a = () => {
        history('/payment');
    }
    return (
        <>
            <div className='home' style={{ height: "100px", width: "1320px", backgroundColor: "#FAF9F6" ,overflow:"hidden"}}>

                <div style={{ marginLeft: "200px", paddingTop: "23px", fontSize: "xx-large" }}>
                    <h4>Expert Hub</h4>
                </div>
                <div style={{ marginLeft: "230px", fontSize: "small", fontWeight: "600" }}>
                    <p>Teacher Provider</p>
                </div>
                <div className="fg" style={{ marginLeft: "425px", fontSize: "large", fontWeight: "inherit", marginTop: "-40px" }}>
                    <p onClick={su}>What Is Expert Hub?</p>
                </div>
                <div className="kit" style={{ marginLeft: "1115px", marginTop: "-15px" }}>
                    <p><span style={{ color: "grey" }}>Hellow,</span>{nameget}</p>
                </div>
                <div classname='image'>
                    <img style={{ width: "50px", height: "50px", marginLeft: "1225px", marginTop: "-35px", borderRadius: "50%" }} src={img} />

                </div>
                <div style={{ marginTop: "-70px", marginLeft: "1230px", fontSize: "35px" }}>
                    <h1 style={{ color: "green" }}>.</h1>
                </div>
                <div >
                    <h4 style={{ color: "#7CB9E8", marginLeft: "20px", marginTop: "-66px", fontSize: "xx-large" }}>{typeget}</h4>
                </div>

                {/* <div className="hom" style={{ marginLeft: "1100px", fontSize: "large", fontWeight: "inherit", marginTop: "-30px" }}>
<button>Admin</button>
</div>
<div className="hom" style={{ marginLeft: "940px", fontSize: "large", fontWeight: "inherit", marginTop: "-38px" }}>
<button onClick={suw}>User</button>
</div> */}

            </div>
            <div style={{ display: "flex",height:"100vh", width: "1290px", }}>
                <div className='sidebar' style={{ height: "200vh", width: "145px", backgroundColor: "#232B2B" }}>
                    <p onClick={next}>View Data</p>
                </div>
                <div className="sidepic">
                    <AddBoxIcon onClick={next} sx={styles.tr} size={70} />
                </div>
                <div style={{ marginTop: "105px" ,height:"100vh"}}>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <WindowIcon onClick={hm} sx={h.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-117px" }} onClick={hm}> Home</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <SystemUpdateIcon onClick={up} sx={style.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <p onClick={up}>Update Data</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <YoutubeSearchedForIcon onClick={search} sx={style.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <p onClick={search}>Management</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <HomeIcon onClick={home} sx={st.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-25px" }}>
                        <p onClick={home}>Add Seminars</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <Person2Icon onClick={view} sx={s.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p onClick={view}>Profile</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <PasswordIcon onClick={pass} sx={p.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-135px" }} onClick={pass}>Change Pass</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <LocalLibraryIcon onClick={lear} sx={l.tr} size={70} />
                    </div>
                    <div className='sidebar1'  style={{ marginLeft: "-25px" }}>
                        <p style={{ marginLeft: "-135px" }} onClick={lear}>Manage Seminar</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <DomainVerificationIcon onClick={ar} sx={k.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-25px" }}>
                        <p style={{ marginLeft: "-112px" }} onClick={ar}>Verification</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <PaymentIcon onClick={a} sx={i.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-25px" }}>
                        <p style={{ marginLeft: "-105px" }} onClick={a}>Payments</p>
                    </div>
                </div>

                <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "25px", 'display': "flex", 'marginLeft': "35px", 'marginRight': "25px", 'height': "40px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>

                    <div className="App" style={{ marginTop: "-10px", marginLeft: "-20px" }}>
                        {/* <button onClick={logout}>logout</button><br/><br/> */}
                        <CancelSharpIcon onClick={logout} sx={styl.tr} size={70} />


                    </div>
                    {/* <div className="App" style={{ marginTop: "-8.5px" }}>
                            <button onClick={Show}>Show</button><br /><br />
                        </div> */}
                    {/* <div className="kit" style={{ marginLeft: "900px", marginTop: "-2px" }}>
                        <p><span style={{ color: "grey" }}>Hellow,</span>{nameget}</p>
                    </div>
                    <div classname='image'>
                        <img style={{ width: "50px", height: "50px", marginLeft: "5px", marginTop: "-15px", borderRadius: "50%" }} src={img} />

                    </div>
                    <div style={{ marginTop: "-33px", marginLeft: "-45px", fontSize: "35px" }}>
                        <h1 style={{ color: "green" }}>.</h1>
                    </div> */}
                </div>
              

            </div>
            <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto",marginTop:"-67%",padding:"17%"}}>
                    {courseTeacher.map((row, index) => (
                        <div className="profile-body">
                            <div className="profile-info">
                                <img src={row.img} alt="Profile Image" className="profile-image" />
                                <h3 className="profile-heading">Contact Information</h3>

                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Email:</span>{row.email}</p>
                                {/* <p className="profile-detail">Phone: (123) 456-7890</p> */}
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Address:</span>{row.address}</p>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Location:</span>{row.loc}</p>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>course:</span>{row.course}</p>
                                <p className="profile-detail">{row.type}</p>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Qualification:</span>{row.qualification}</p>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Experience:</span>{row.experience}</p>
                            </div>




                        </div>
                    ))}
                </div>





        </>

    );

}
<div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    marginTop: "-600px",
    marginLeft: "-100px"
}}></div>

