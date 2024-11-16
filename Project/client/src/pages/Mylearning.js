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
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChatIcon from '@mui/icons-material/Chat';
export default function BasicTable() {
    const [nameget, setget] = useState("");
    const [typeget, settype] = useState("");
    const [feedback, setfeedback] = useState("");
    const [ID, setID] = useState(0)
    const [course, setcourse] = useState([]);
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
    const [img, setimg] = useState("")
    const [update, setUpdate] = useState({})
    const [loginError, setLoginError] = useState(null);
    const [error, seterror] = useState({});
    const [visibility, setVisibility] = useState(false)
    const [user, setUser] = useState({})
    let [seminars, setseminars] = useState([])
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
            console.log(result.data)
            console.log(user);
            setUser(result.data);
            setUpdate(result.data)
            localStorage.setItem("UserData", JSON.stringify(user))
            console.log(user)
            setVisibility(false)
            setLoginError("Data Updated Successfully");
            alert("Updated")
            console.log(user)
        })
    }
   

    const next = () => {
        history('/addsturemain');
    }
    const logout = () => {
        // localStorage.removeItem("User_login");
        history('/stuhome');
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
        history('/changepass');
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
        history('/mylearning');
    }
    const view = () => {
        history('/viewstu');
    }

    const home = () => {
        history('/stu');
    }
    const search = () => {
        history('/searchcour');
    }
    const up = () => {
        history('/updatestu');
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
    const unenrolledHandller = (semi, oldindex) => {
        console.log(semi._id)
        setVisibility(true);
        const user = JSON.parse(localStorage.getItem("UserData"))
        axios.delete("http://localhost:1337/api/deleteSeminar?id=" + JSON.stringify({
            userID: user._id,
            seminarID: semi._id
        })).then((result) => {
            seminars = seminars.filter((id, index) => {
                return index != oldindex
            })
            setseminars(seminars)
            localStorage.setItem("UserData", JSON.stringify(result.data.User))

        }).catch(() => {
            console.log(error)
        })
    }
    useEffect(() => {
        let getuserarr = JSON.parse(localStorage.getItem("UserData"));
        console.log("Get USer Arr => ", getuserarr);
        axios.get('http://localhost:1337/api/recUsersvseminar?data=' + JSON.stringify({
            userID: getuserarr._id
        })).then((result) => {
            console.log("response",result)
            setseminars(result.data.User.Seminars)
        })
    }, [])
    useEffect(() => {
        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
        let obj8 = JSON.parse(getuserarr).img
        setimg(obj8)
        console.log(JSON.parse(getuserarr).Uname)
        let obj1 = JSON.parse(getuserarr).type
        settype(obj1);
        setget(obj);


    }, [])
    
    const su = () => {
        history('/ans');
    }
    const hm = () => {
        history('/stuhome');
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
    const r = {
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
    const re = () => {
        history('/hire');
    }
    // const submit1 = () => {
    //     console.log("hello")
    //     axios.post("http://localhost:1337/api/updatefeedback", { ID, feedback }).then((res) => {
    //         console.log("Response => ", res.data);
    //         setLoginError("Data Added")
    //         const data = JSON.parse(localStorage.getItem("UserData"))
    //         data.course = course
    //         localStorage.setItem("UserData", JSON.stringify(res.data))
    //         alert("Inserted")
    //     }).catch(err => {
    //         console.log("err => ", err);
    //     })
    // }
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
                    <h4 style={{ color:"#7CB9E8",marginLeft: "20px", marginTop: "-66px", fontSize: "xx-large" }}>{typeget}</h4>
                </div>

                {/* <div className="hom" style={{ marginLeft: "1100px", fontSize: "large", fontWeight: "inherit", marginTop: "-30px" }}>
<button>Admin</button>
</div>
<div className="hom" style={{ marginLeft: "940px", fontSize: "large", fontWeight: "inherit", marginTop: "-38px" }}>
<button onClick={suw}>User</button>
</div> */}

            </div>
            <div style={{ display: "flex", direction: "row", overflow: "hidden" }}>
                <div className='sidebar' style={{ height: "100vh", width: "150px", backgroundColor: "#232B2B" }}>
                    <p onClick={next}>Add Data</p>
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
                        <p onClick={search}>Search Course</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <HomeIcon onClick={home} sx={st.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p  style={{ marginLeft: "-130px" }}onClick={home}>Seminars</p>
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
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-135px" }} onClick={lear}>My Learning</p>
                    </div>
                    {/* <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <ChatIcon onClick={re} sx={r.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-112px" }} onClick={re}>Chat</p>
                    </div> */}


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

            <TableContainer component={Paper} sx={{ marginLeft: 2, width: "61%", marginLeft: "21%", marginTop: "-50%" }}>
                <Table sx={{ minWidth: 65 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#007FFF", }}>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} >ID </TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Name</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Time</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            seminars.map((semi, index) => (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell >{index + 1}</TableCell>
                                    <TableCell align="right">{semi.title}</TableCell>
                                    <TableCell align="right">{semi.time}</TableCell>
                                    <TableCell align="right"><button onClick={(event) => unenrolledHandller(semi, index)}>Unenrolled</button></TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            {console.log("User  => ", user)}
            <>
                {

                //     visibility
                //     &&   <div style={{ marginTop: "-240px" }}>
                //     <label style={{ fontWeight: "bold" }} htmlFor='name'>Feedback</label><br /><br />
                //     <input type="text" name="feedback" id="feedback" placeholder='feedback' value={feedback} size="40" onChange={(e) => setfeedback(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none", padding: "30px" }}></input><br /><br />
                //     {/* {error.title && <p style={{ color: 'red' }}>{error.title}</p>} */}
                //     <button name="check" id="check" onClick={submit1} style={{ marginLeft: "90px" }} >Submit</button><br /><br />
                // </div>
                }
            </>
        </>
    );

}
