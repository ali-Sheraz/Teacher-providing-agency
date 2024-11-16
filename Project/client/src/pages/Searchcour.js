
import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import axios from 'axios'

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WindowIcon from '@mui/icons-material/Window';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChatIcon from '@mui/icons-material/Chat';
const Searchcour = () => {
    // const [name,setname]=useState("");
    const [nameget, setget] = useState("");
    const [course, setcourse] = useState(undefined);
    const [User, setUser] = useState([]);
    const [img, setimg] = useState("")
    const [userID,setuserID]=useState("")
    const [typeget, settype] = useState("");
    const [teachers,setTeacher]=useState([])
    // const [courseTeacher2, setCourseTeacher2] = useState([]);

    // const [qualification,setqualification]=useState("");
    // const [experience,setexperience]=useState("");
    const history = useNavigate();
    useEffect(() => {
        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj0=JSON.parse(getuserarr)._id
        setuserID(obj0)
        let obj = JSON.parse(getuserarr).Uname
        console.log(JSON.parse(getuserarr).Uname)
        let obj8 = JSON.parse(getuserarr).img
        setimg(obj8)
        setget(obj);
        let obj1 = JSON.parse(getuserarr).type
        settype(obj1);
    }, [])
    useEffect(() => {
        if (course) {
            setUser([])
            console.log("Calling => ", course);
            axios.get(`http://localhost:1337/api/SearchTeacher/${course}`).then((result) => {
                console.log(course)

                console.log("result => ", result)
                setUser(result && result?.data?.User);
            })
        } else {
            console.log("hello")
            axios.get("http://localhost:1337/api/GetTeacher").then((result) => {
                console.log("result => ", result?.data?.User)
                setUser(result && result?.data?.User);
            })
        }
    }, [course])


    // const [store,setStore]=useState([]);
    // const [data,setdata]=useState([]);

    // const [error, seterror] = useState({ validation });
    const submit = async e => {
        e.preventDefault();
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        //   localStorage.setItem("store",store);
        // seterror(validation(course));
        //  console.log(store);

        //    console.log(data);
    }

    const path = () => {
        console.log("helllo");
        history('/new');
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
    // function validation(course) {

    //     let error = {};
    //     if (!course) {
    //         error.course = "course Required";
    //     }
    //     //  else if(!course)
    //     //  {
    //     //      error.course="Course Required";
    //     //  }
    //     //  else if(!qualification)
    //     //  {
    //     //      error.qualification="Qualification Required";
    //     //  }
    //     //  else if(!experience)
    //     //  {
    //     //      error.experience="Experience Required"; 
    //     //  }else{
    //     // axios.post("http://localhost:1337/api/courseTeacher", { course }).then((res) => {
    //     //     console.log("Response => ", res);
    //     //     alert("Inserted")
    //     // }).catch(err => {
    //     //     console.log("err => ", err);
    //     // })


    //     //      else
    //     //      {
    //     //       console.log("Email calling")
    //     //        axios.post('http://localhost:1337/api/login', {email ,password}).then((result)=>{
    //     //         console.log(result)
    //     //         alert("Loged in")
    //     //         history('/formsucces');
    //     //       }).catch((error)=>{
    //     //         console.log(error)
    //     //         error.check="invalid Credentials"
    //     //       })
    //     //     //      if(getuserarr && getuserarr.length)
    //     //     //      {      
    //     //     //          const userdata=JSON.parse(getuserarr); 
    //     //     //          // console.log(userdata);
    //     //     //          const userlogin=userdata.filter((el,k)=>{
    //     //     //               return el.email===values.email && el.password===values.password  
    //     //     //          });
    //     //     //          console.log(userlogin);
    //     //     //          if(userlogin.length===0)
    //     //     //          {
    //     //     //              error.check="Invalid Detail";
    //     //     //          }
    //     //     //          else
    //     //     //          {
    //     //     //              console.log("login successfully");
    //     //     //              localStorage.setItem("User_login",JSON.stringify(getuserarr));
    //     //     //             history('/formsucces');
    //     //     //          }
    //     //     //  }
    //     //  }
    //     return error;
    // }
    const logout = () => {
        // localStorage.removeItem("User_login");
        history('/stuhome');
    }
    const next = () => {
        history('/addsturemain');
    }
    const update = () => {
        history('/updatestu');
    }
    const search = () => {
        history('/searchcour');
    }
    const home = () => {
        history('/stu');
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
    const sk = {
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
        history('/viewstu');
    }
    // const dec = () => {
    //     // localStorage.removeItem("User_login");
    //     history('/show');
    // }
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
    const updat=()=>{
        history("/chat")
    } 
    const updationHandlder = async(user,teacher) => {
        console.log(user)
        console.log(teacher)
      await axios.post("http://localhost:1337/api/MakeRequest",{
        User:user,
        Teacher:teacher
      })
    }
    const unenrolledHandller = (semi, oldindex) => {
        console.log("User=>",semi)
        let getuserarr =JSON.parse(localStorage.getItem("UserData"));
        console.log("Get USer Arr => ", getuserarr);
        const user = JSON.parse(localStorage.getItem("UserData"))
        axios.delete("http://localhost:1337/api/deleterequest?id=" + JSON.stringify({
            TeacherID:semi._id,
            UserID:getuserarr._id
        })).then((result) => {
            alert("deleted")
            // seminars = seminars.filter((id, index) => {
            //     return index != oldindex
            // })
            // setseminars(seminars)
            // localStorage.setItem("UserData", JSON.stringify(result.data.User))

        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        let getuserarr = JSON.parse(localStorage.getItem("UserData"));
        console.log("Get USer Arr => ", getuserarr);
        axios.get('http://localhost:1337/api/GetRequest?data=' + JSON.stringify({
            userID: getuserarr._id,
            type:"user"
        })).then((result) => {
            console.log("response",result.data.request)
            setTeacher(result.data.request)
        })
    }, [])
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
            <div style={{ display: "flex" }}>

                <div className='sidebar' style={{ height: "auto", width: "150px", backgroundColor: "#232B2B" }}>
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
                        <SystemUpdateIcon onClick={update} sx={style.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <p onClick={update}>Update Data</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <YoutubeSearchedForIcon onClick={search} sx={sty.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-30px", marginTop: "5px" }}>
                        <p onClick={search}>Search Course</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <HomeIcon onClick={home} sx={s.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p  style={{ marginLeft: "-130px" }}onClick={home}>Seminars</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <Person2Icon onClick={view} sx={sk.tr} size={70} />
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

                <div>
                    <section>
                        <div style={{ marginLeft: "90px", marginTop: "35px" }} class="content">
                            <h3>SEARCH</h3>
                            <h3>SEARCH</h3>
                        </div>
                    </section>
                    <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "80px", 'display': "flex", 'marginLeft': "38px", 'marginRight': "25px", 'height': "40px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>
                        <div className="App" style={{ marginLeft: "-20px", marginTop: "-10px" }}>
                            <CancelSharpIcon onClick={logout} sx={st.tr} size={70} />

                        </div>
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
                    <div>
                        {/* <div style={{ 'textalign': "center", 'color': "black", 'marginDown': "20px" }}>
                </div> */}
                        <div className='main' style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "45px", 'display': "flex", 'marginLeft': "50px", 'marginRight': "50px", 'height': "auto", 'backgroundColor': "white", 'borderRadius': "20px" }}>
                            <img style={{ width: "180px", height: "150px", marginLeft: "20px" }} src="images/logo1.png" />
                            <div className='main1' style={{ 'padding': "110px 10px 10px 50px", marginLeft: "80px" }}>
                                <h2>Welcome {nameget}</h2><br />
                                <p>Search Course For Learning.</p><br /><br />
                                {/* <label htmlFor='name'>Name</label><br/><br/>
         <input type="text"name="name"id="name" placeholder='name' value={name} size="40"onChange={(e)=>setname(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
         {error.name &&<p style={{color: 'red'}}>{error.name}</p>} */}
                                <label></label><br /><br />
                                <input type="text" name="course" id="course" placeholder='course' value={course} size="40" onChange={(e) => {
                                    setcourse(e.target.value)
                                }
                                } style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                {/* {error.course && <p style={{ color: 'red' }}>{error.course}</p>} */}
                                {/* <label>Qualification</label><br/><br/>
         <input type="text"name="qualification"id="qualification" placeholder='qualification' value={qualification} size="40"onChange={(e)=>setqualification(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
         {error.qualification &&<p style={{color: 'red'}}>{error.qualification}</p>}
         <label>Experience</label><br/><br/>
         <input type="text"name="experience"id="experience" placeholder='experience' value={experience} size="40"onChange={(e)=>setexperience(e.target.value)}style={{borderTopStyle:"none",borderLeftStyle:"none",borderRightStyle:"none"}}></input><br/><br/>
         {error.experience &&<p style={{color: 'red'}}>{error.experience}</p>} */}
                                {/* <button name="check" id="check" onClick={submit}>Submit</button><br /><br /> */}
                                {/* <span className='form-input-login'>Don't have an account? <NavLink to="/login"style={{'color': "rgb(74, 74, 171)",'textDecoration':"none"}}>Sign up</NavLink></span> */}
                                {/* <span> {error.check &&<p>{error.check}</p>}</span> */}
                            </div>
                            {/* <div style={{ 'marginLeft': "50px"}}>
         <img src="images/desktop.png" style={{'height': "100%", 'maxWidth': "100%", 'backgroundSize': "100%",'borderTopRightRadius':"20px",'borderBottomRightRadius':"20px" }} />
       </div> */}
                        </div>
                    </div>
                    <TableContainer component={Paper} sx={{ marginTop: 5, marginLeft: 4 }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#007FFF", padding: "40px" }}>
                                    <TableCell sx={{ color: "white" }}>ID </TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Name</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Course</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Qualification</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Experience</TableCell>
                                    <TableCell sx={{ color: "white"}} align="right">Image</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Hire Teacher</TableCell>
                                    {/* <TableCell sx={{ color: "white" }} align="right">Chat System</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {User && User.map((row, index) => {
                                    console.log("teachers=>",row._id)
                                    let index2=teachers.findIndex((user)=>user.TeacherID===row._id)
                                    let flag=false
                                    if(index2!=-1){
                                            return(
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
            
                                                    <TableCell >{index + 1}</TableCell>
                                                    <TableCell align="right">{row.Uname}</TableCell>
                                                    <TableCell align="right">{row.course}</TableCell>
                                                    <TableCell align="right">{row.qualification}</TableCell>
                                                    <TableCell align="right">{row.experience}</TableCell>
                                                    <TableCell align="right"><img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={row.img}></img></TableCell>
                                                    {
                                                    teachers[index2].isRequest===false? <TableCell align="right"><div className="hom"><button>Requested....</button></div></TableCell>:
                                                    <TableCell align="right"><div className="hom"><button onClick={(event) => unenrolledHandller(row, index)}>UnHire</button></div></TableCell>
                                                    
                                                    }
                                                 
            
                                                </TableRow>
                                                )
                                    }
                                    else{
                                        return(
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
        
                                                <TableCell >{index + 1}</TableCell>
                                                <TableCell align="right">{row.Uname}</TableCell>
                                                <TableCell align="right">{row.course}</TableCell>
                                                <TableCell align="right">{row.qualification}</TableCell>
                                                <TableCell align="right">{row.experience}</TableCell>
                                                <TableCell align="right"><img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={row.img}></img></TableCell>
                                                <TableCell align="right"><div className="hom"><button onClick={()=>updationHandlder(userID,row._id)}>Hire</button></div></TableCell>
                                                {/* <TableCell align="right"><div className="hom"><button onClick={()=>updat(userID,row._id)}>chat</button></div></TableCell> */}
                                                
        
                                            </TableRow>
                                            )
                                    }
                               
})}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>

    );
}

export default Searchcour