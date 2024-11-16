import PaymentIcon from '@mui/icons-material/Payment';
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

export default function BasicTable() {
    const [nameget, setget] = useState("");
    const [pass, setpass] = useState("");
    let [seminars, setseminars] = useState([])
    useEffect(()=>{
        console.log("hello")
        axios.get("http://localhost:1337/api/getpay").then((res)=>{
            setseminars(res.data)
            console.log(res)
        })
    },[])
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
    const [opassword, setopassword] = useState("");
    const [password, setpassword] = useState("");
    const [Cpassword, setCpassword] = useState("");
    const history = useNavigate();
    const [update, setUpdate] = useState({})
    const [loginError, setLoginError] = useState(null);
    const [error, seterror] = useState({});
    const [img, setimg] = useState("")
    const [user, setUser] = useState({})
    const [typeget, settype] = useState("");
    const submit = async e => {
        e.preventDefault();
        // console.log("heloo",opassword);
        // alert(JSON.stringify(user))
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        // localStorage.setItem("store",store);
        seterror(validation(opassword, user.password, user.Cpassword));
        //  console.log(opassword);
        // console.log(user)



    }
    function validation(opassword, password, Cpassword) {

        let error = {};
        if (!opassword) {
            error.opassword = "password Required";
        }
        else if (!password) {
            error.password = "New password Required";
        }

        else if (!Cpassword) {
            error.Cpassword = "Confirm password Required";
        }
        else if (password != Cpassword) {
            error.Cpassword = "Password are not matched"
        }
        // else if(password.lenght<6)
        // {
        //     error.password="Length must greater than 6"
        // }
        // else if(Cpassword.lenght<6)
        // {
        //     error.Cpassword="Length must greater than 6"
        // }

        else {
            console.log("salman")
            let getuserarr = localStorage.getItem("UserData");
            console.log("Get USer Arr => ", getuserarr);
            // let obj2=JSON.parse(getuserarr);
            // console.log(getuserarr._id);
            let obj1 = JSON.parse(getuserarr).password

            console.log(obj1)
            if (opassword.opassword === obj1) {
                console.log(user);
                getuserarr = JSON.parse(getuserarr);
                console.log(getuserarr)
                getuserarr.password = password;
                getuserarr.Cpassword = Cpassword;
                console.log(getuserarr);
                axios.put("http://localhost:1337/api/updateUser", getuserarr).then((result) => {
                    console.log(result.data)
                    console.log(user);
                    setUser(result.data);
                    setUpdate(result.data)
                    localStorage.setItem("UserData", JSON.stringify(getuserarr))
                    console.log(user)
                    setLoginError("password Updated");
                    alert("Updated")
                    console.log(user)
                })
            }
            else {
                setpass(obj1);
                setLoginError("Old password incorrect");
            }

        }
        return error;
    }
    const passs = () => {
        history('/changepassad');
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
    const view = () => {
        history('/viewadmin');
    }

    const home = () => {
        history('/seminar');
    }
    const search = () => {
        history('/updstutea');
    }
    const next = () => {
        history('/managestudent');
    }
    const logout = () => {
        // localStorage.removeItem("User_login");
        history('/adminlogin');
    }
    const up = () => {
        // localStorage.removeItem("User_login");
        history('/updadmin');
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
        console.log(user?.password)
        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
        console.log(JSON.parse(getuserarr).Uname)
        let obj8 = JSON.parse(getuserarr).img
        setimg(obj8)
        setget(obj);
        let obj1 = JSON.parse(getuserarr).type
        settype(obj1);

    }, [update])
    const su = () => {
        history('/ans');
    }
    const hm = () => {
        history('/adminlogin');
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
    const UpdateRequest = async (semi, index) => {
        let getuserarr = JSON.parse(localStorage.getItem("UserData"));
        console.log("Get USer Arr => ", getuserarr);
        axios.put('http://localhost:1337/api/accptpay?id='+semi._id+"&userID="+semi.UserID._id+"&seminarID="+semi.SeminarID._id
        ).then((result) => {
            console.log("response", result.data.request)
            alert("updated")
        })
    }

    const DeleteRequest = async (semi, index) => {
        let getuserarr = JSON.parse(localStorage.getItem("UserData"));
        console.log(semi._id)
        console.log("Get USer Arr => ", getuserarr);
        axios.delete('http://localhost:1337/api/getdel?id='+semi._id+"&userID="+semi.UserID._id+"&seminarID="+semi.SeminarID._id
        ).then((result) => {
            console.log("response", result.data.request)
            alert("Deleted")
        })
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
    // const unenrolledHandller = (semi, oldindex) => {
    //     console.log("User=>", semi)
    //     let getuserarr = JSON.parse(localStorage.getItem("UserData"));
    //     console.log("Get USer Arr => ", getuserarr);
    //     const user = JSON.parse(localStorage.getItem("UserData"))
    //     axios.delete("http://localhost:1337/api/deleterequest?id=" + JSON.stringify({
    //         TeacherID: getuserarr._id,
    //         UserID: semi.UserID._id
    //     })).then((result) => {
    //         alert("deleted")
    //         // seminars = seminars.filter((id, index) => {
    //         //     return index != oldindex
    //         // })
    //         // setseminars(seminars)
    //         // localStorage.setItem("UserData", JSON.stringify(result.data.User))

    //     }).catch(() => {
    //         console.log(error)
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
                    <div className='sidebar1'style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <p onClick={home}>Add Seminars</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <Person2Icon onClick={view} sx={s.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p onClick={view}>Profile</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <PasswordIcon onClick={passs} sx={p.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-135px" }} onClick={passs}>Change Pass</p>
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

                        <CancelSharpIcon onClick={logout} sx={styl.tr} size={70} />


                    </div>
{/* 
                    <div className="kit" style={{ marginLeft: "900px", marginTop: "-2px" }}>
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
            {/* <TableContainer component={Paper} sx={{ marginLeft: 2, width: "61%", marginLeft: "21%", marginTop: "-50%" }}>
                <Table sx={{ minWidth: 65 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#007FFF", }}>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} >ID </TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Name</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Accept</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Reject</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            seminars.map((semi, index) => (
                                semi.type!="Admin"&&<TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                       <TableCell sx={{ marginLeft: "2px" }} >{index + 1}</TableCell>
                                    <TableCell sx={{ marginLeft: "2px" }} align="right">{semi.Uname}</TableCell>
                                
                                        <TableCell align="right" style={{ display: "flex" }}>
                                            <TableCell sx={{ marginLeft: "2px" }}>  <button onClick={(event) => UpdateRequest(semi, index)}>Accept</button>  </TableCell>
                                            <TableCell sx={{ marginLeft: "2px" }}> <button onClick={(event) => DeleteRequest(semi, index)}>Reject</button></TableCell>
                                        </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer> */}
               <TableContainer component={Paper} sx={{ marginLeft: 2, width: "61%", marginLeft: "21%", marginTop: "-55%" }}>
                <Table sx={{ minWidth: 65 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "#007FFF", }}>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} >ID </TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">User Name</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Title</TableCell>
                            <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Accept</TableCell>
                            {/* <TableCell sx={{ color: "white", marginLeft: "2px" }} align="right">Reject</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            seminars.map((semi, index) => (
                                semi.type!="Admin"&&<TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                       <TableCell sx={{ marginLeft: "2px" }} >{index + 1}</TableCell>
                                    <TableCell sx={{ marginLeft: "2px" }} align="right">{semi.UserID.Uname}</TableCell>
                                    <TableCell sx={{ marginLeft: "2px" }} align="right">{semi.SeminarID.title}</TableCell>
                                        <TableCell align="right" style={{ display: "flex" }}>
                                            <TableCell sx={{ marginLeft: "2px" }}>  <button onClick={(event) => UpdateRequest(semi, index)}>Accept</button>  </TableCell>
                                            {/* <TableCell sx={{ marginLeft: "2px" }}> <button onClick={(event) => DeleteRequest(semi, index)}>Reject</button></TableCell> */}
                                        </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>

            {console.log("User  => ", user)}
            {/* <>
                {

                    <div style={{ marginLeft: "500px", marginTop: "-600px" }}><br />
                        <h1 style={{ color: "#007FFF", marginLeft: "-35px" }} >PASSWORD UPDATION</h1><br /><br />
                        <label htmlFor='name'>Old password</label><br /><br />
                        <input type="text" name="opassword" id="opassword" placeholder={opassword} size="40" onChange={(e) => setopassword({ opassword: e.target.value })}></input><br /><br />
                        {error.opassword && <p style={{ color: 'red' }}>{error.opassword}</p>}
                        <label>New password</label><br /><br />
                        <input type="text" name="password" id="password" placeholder={user?.password} size="40" onChange={(e) => setUser({ ...user, password: e.target.value })}></input><br /><br />
                        {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                        <label>Confirm password</label><br /><br />
                        <input type="text" name="Cpassword" id="Cpassword" placeholder={user?.Cpassword} size="40" onChange={(e) => setUser({ ...user, Cpassword: e.target.value })}></input><br /><br />
                        {error.Cpassword && <p style={{ color: 'red' }}>{error.Cpassword}</p>}
                        <button name="check" id="check" onClick={submit} style={{ marginLeft: "60px" }} >Update</button><br /><br />
                        <div className="back">
                            <span > {loginError && <p style={{ backgroundolor: "white" }}>{loginError}</p>}</span>
                        </div>
                    </div>
                }
         
            </> */}
            
        </>
    );

}
