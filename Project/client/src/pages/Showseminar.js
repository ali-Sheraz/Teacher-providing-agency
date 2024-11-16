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
        axios.put("http://localhost:1337/api/updseminar", user).then((result) => {
            axios.get("http://localhost:1337/api/Getseminar").then((result) => {
                console.log("result => ", result?.data?.User)
                setCourseTeacher(result && result?.data?.User);

                //   setUpdate(result.data)
                //   localStorage.setItem("UserData", JSON.stringify(user))
                setLoginError("Seminar Updated Successfully");
                alert("Updated")
                setVisibility(false)
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
        axios.get("http://localhost:1337/api/Getseminar").then((result) => {
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
    const deletionHandlder = (event, user) => {
        console.log("ID =>", user._id);
        axios.delete("http://localhost:1337/api/deletesem?id=" + user._id).then((result) => {
            axios.get("http://localhost:1337/api/Getseminar").then((result) => {
                console.log("result => ", result?.data?.User)
                setCourseTeacher(result && result?.data?.User);

                //   setUpdate(result.data)
                //   localStorage.setItem("UserData", JSON.stringify(user))
                setLoginError("Seminar Deleted Successfully");
                alert("Deleted Successfully ")
                // setVisibility(false)
            })
        })

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
            <div style={{ display: "flex", direction: "row", overflow: "hidden" }}>
                <div className='sidebar' style={{ height: "115vh", width: "150px", backgroundColor: "#232B2B" }}>
                    <p onClick={next}>View Data</p>
                </div>
                <div className="sidepic">
                    <AddBoxIcon onClick={next} sx={styles.tr} size={70} />
                </div>
                <div style={{ marginTop: "105px" }}>
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
                        <YoutubeSearchedForIcon onClick={search} sx={sty.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-30px", marginTop: "5px" }}>
                        <p onClick={search}>Management</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <HomeIcon onClick={home} sx={st.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-30px", marginTop: "5px" }}>
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
                    <div className='sidebar1' style={{ marginLeft: "-25px" }}>
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

            <TableContainer component={Paper} sx={{ marginLeft: 2, width: "80%", marginLeft: "15%", marginTop: "-57%" }}>
                <Table sx={{ minWidth: 65 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#007FFF", }}>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} >ID </TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Title</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "20px" }} align="center">Description</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }}>Time</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }}>Paid</TableCell>
                            {/* <TableCell sx={{ color: "white", marginLeft: "2px" }}>Qualification</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }}>Address</TableCell> */}
                            {/* <TableCell sx={{ color: "white", marginLeft: "2px" }}>Image</TableCell> */}
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="center">UpdateInfo</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="center">DeleteSeminar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courseTeacher && courseTeacher.map((row, index) => (
                            <TableRow
                                key={row.Uname}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >


                                <TableCell >{index + 1}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.paid}</TableCell>
                                {/* <TableCell align="right">{row.qualification}</TableCell>
                                <TableCell align="right">{row.address}</TableCell> */}
                                {/* <TableCell align="right"><img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={row.img}></img></TableCell> */}

                                <TableCell align="right"><button onClick={(event) => updationHandlder(event, row)}>Update</button></TableCell>
                                <TableCell align="right"><div className="hom"><button onClick={(event) => deletionHandlder(event, row)}>Delete</button></div></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {console.log("User  => ", user)}
            <>
                {

                    visibility
                    && <div style={{ marginLeft: "500px" }}><br />
                        <h1 style={{ marginLeft: "60px" }} >UPDATION</h1><br /><br />
                        <label htmlFor='name'>Title</label><br /><br />
                        <input type="text" name="title" id="title" placeholder={user?.title} size="40" onChange={(e) => setUser({ ...user, title: e.target.value })}></input><br /><br />
                        {error.title && <p style={{ color: 'red' }}>{error.title}</p>}
                        <label>Description</label><br /><br />
                        <input type="text" name="description" id="description" placeholder={user?.description} size="40" onChange={(e) => setUser({ ...user, description: e.target.value })}></input><br /><br />
                        {error.description && <p style={{ color: 'red' }}>{error.description}</p>}
                        <label>Time</label><br /><br />
                        <input type="text" name="time" id="time" placeholder={user?.time} size="40" onChange={(e) => setUser({ ...user, time: e.target.value })}></input><br /><br />
                        {error.time && <p style={{ color: 'red' }}>{error.time}</p>}
                        <label>Paid</label><br /><br />
                        <input type="text" name="paid" id="paid" placeholder={user?.paid} size="40" onChange={(e) => setUser({ ...user, paid: e.target.value })}></input><br /><br />
                        {error.paid && <p style={{ color: 'red' }}>{error.paid}</p>}
                        {/* <label>Qualification</label><br /><br />
                        <input type="text" name="qualification" id="qualification" placeholder={user?.qualification} size="40" onChange={(e) => setUser({ ...user, qualification: e.target.value })}></input><br /><br />
                        {error.qualification && <p style={{ color: 'red' }}>{error.qualification}</p>}
                        <label>Address</label><br /><br />
                        <input type="text" name="address" id="address" placeholder={user?.address} size="40" onChange={(e) => setUser({ ...user, address: e.target.value })}></input><br /><br />
                        {error.address && <p style={{ color: 'red' }}>{error.address}</p>} */}
                        {/* <label>Experience</label><br /><br />
            <input type="text" name="experience" id="experience" placeholder={user?.experience}  size="40" onChange={(e) => setUser({ ...user, experience: e.target.value })}></input><br /><br />
            {error.qualification && <p style={{ color: 'red' }}>{error.qualification}</p>} */}
                        <button name="check" id="check" onClick={submit} style={{ marginLeft: "60px" }} >Update</button><br /><br />
                        <span > {loginError && <p style={{ backgroundolor: "white" }}>{loginError}</p>}</span>
                    </div>
                }
            </>
        </>
    );

}
