import { useEffect, useState } from 'react'
import New from './New'
import Show from './Show'
import Login from './Login';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import HomeIcon from '@mui/icons-material/Home';
import PasswordIcon from '@mui/icons-material/Password';
import WindowIcon from '@mui/icons-material/Window';
import Person2Icon from '@mui/icons-material/Person2';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChatIcon from '@mui/icons-material/Chat';
import cou from "../assets/course.json";
import qou from "../assets/qualification.json";

const Adteachremain = () => {
    const [name, setname] = useState("");
    const [nameget, setget] = useState("");
    const [course, setcourse] = useState("");
    const [ID, setID] = useState(0)
    const [qualification, setqualification] = useState("");
    const [experience, setexperience] = useState("");
    const [address, setaddress] = useState("");
    const history = useNavigate();
    const [loginError, setLoginError] = useState(null);
    const [img, setimg] = useState("")
    const [typeget, settype] = useState("");
    useEffect(() => {
        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
        console.log(JSON.parse(getuserarr).Uname)
        setget(obj);
        setID(JSON.parse(getuserarr)._id)
        let obj8 = JSON.parse(getuserarr).img
        setimg(obj8);
        let obj1 = JSON.parse(getuserarr).type
        settype(obj1);

    }, [])
    // const [store,setStore]=useState([]);
    // const [data,setdata]=useState([]);

    const [error, seterror] = useState({ validation });
    const submit = async e => {
        e.preventDefault();
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        //   localStorage.setItem("store",store);
        seterror(validation(course, qualification, experience, address));
        //  console.log(store);

        //    console.log(data);
    }

    function validation(email, password) {
        let letters = /^([A-zÀ-ž\s])+$/;
        let error = {};
        // if (!name) {
        //     error.name = "Name Required";
        // }
        // else if (!name.match(letters)) {
        //     error.name = "Name must only string";
        // }
        if (!course) {
            error.course = "Course Required";
        }
        else if (!course.match(letters)) {
            error.course = "course must only string";

        }
        else if (!qualification) {
            error.qualification = "Qualification Required";
        }
        else if (!qualification.match(letters)) {
            error.qualification = "Qualification must only string";

        }
        else if (!experience) {
            error.experience = "Experience Required";
        }
        else if (experience <= 0) {
            error.experience = "Experience  must be  greater than 0";
        }
        else if (!address) {
            error.experience = "Address Required";
        }
        else {
            axios.post("http://localhost:1337/api/updateTeacher", { ID, course, qualification, experience, address }).then((res) => {
                console.log("Response => ", res);
                setLoginError("Data Added")
                const data = JSON.parse(localStorage.getItem("UserData"))
                data.course = course
                data.qualification = qualification
                data.experience = experience
                data.address = address

                localStorage.setItem("UserData", JSON.stringify(data))
                alert("Inserted")
                setLoginError("Data Added SuccessFully");
            }).catch(err => {
                console.log("err => ", err);
                setLoginError("Error");
            })

        }
        //      else
        //      {
        //       console.log("Email calling")
        //        axios.post('http://localhost:1337/api/login', {email ,password}).then((result)=>{
        //         console.log(result)
        //         alert("Loged in")
        //         history('/formsucces');
        //       }).catch((error)=>{
        //         console.log(error)
        //         error.check="invalid Credentials"
        //       })
        //     //      if(getuserarr && getuserarr.length)
        //     //      {      
        //     //          const userdata=JSON.parse(getuserarr); 
        //     //          // console.log(userdata);
        //     //          const userlogin=userdata.filter((el,k)=>{
        //     //               return el.email===values.email && el.password===values.password  
        //     //          });
        //     //          console.log(userlogin);
        //     //          if(userlogin.length===0)
        //     //          {
        //     //              error.check="Invalid Detail";
        //     //          }
        //     //          else
        //     //          {
        //     //              console.log("login successfully");
        //     //              localStorage.setItem("User_login",JSON.stringify(getuserarr));
        //     //             history('/formsucces');
        //     //          }
        //     //  }
        //  }
        return error;
    }
    // const logout = () => {
    //     localStorage.removeItem("User_login");
    //     history('/new');
    // }
    // const Show = () => {
    //     // localStorage.removeItem("User_login");
    //     history('/show');
    // }
    const next = () => {
        history('/adteachremain');
    }
    // const search = () => {
    //     history('/');
    // }
    const update = () => {
        history('/updteacher');
    }
    const home = () => {
        history('/view');
    }
    const logout = () => {
        // localStorage.removeItem("User_login");
        history('/teachome');
    }
    const passs = () => {
        history('/changepasst');
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
    const styles1 = {
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
    // const sty = {
    //     tr: {
    //         background: "gray",
    //         '&:hover': {
    //             background: '#FFBF00',
    //             transform: 'scale(1.2)',
    //         },
    //         transition: 'transform 500ms ease',
    //         marginLeft: '-330%',
    //         marginTop: '110%',
    //         size: '90px'
    //     }
    // }
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
    const styles = {
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
    const su = () => {
        history('/ans');
    }
    const hm = () => {
        history('/teachome');
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
        history('/hireteac');
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
    const ch = () => {
        history('/chat');
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
            <div style={{ display: "flex" }}>
                <div className='sidebar' style={{ height: "100vh", width: "150px", backgroundColor: "#232B2B" }}>
                    <p onClick={next}>Add Data</p>
                </div>
                <div className="sidepic">
                    <AddBoxIcon onClick={next} sx={styles1.tr} size={70} />
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
                    {/* <div className="sidepic1" style={{ marginLeft: "-25px", marginTop: "5px" }}>
                        <YoutubeSearchedForIcon onClick={search} sx={sty.tr} size={70} />
                    </div>
                    <div className='sidebar1' style={{ marginLeft: "-30px", marginTop: "5px" }}>
                        <p onClick={search}>Search Course</p>
                    </div> */}

                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <Person2Icon onClick={home} sx={st.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p onClick={home}>Profile</p>
                    </div>

                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <PasswordIcon onClick={passs} sx={p.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-135px" }} onClick={passs}>Change Pass</p>
                    </div>
                    <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <CatchingPokemonIcon onClick={re} sx={r.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-135px" }} onClick={re}>Requests</p>
                    </div>
                    {/* <div className="sidepic1" style={{ marginLeft: "-25px" }}>
                        <ChatIcon onClick={ch} sx={l.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p style={{ marginLeft: "-112px" }} onClick={ch}>Chat</p>
                    </div> */}

                </div>


                <div>
                    <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "25px", 'display': "flex", 'marginLeft': "35px", 'marginRight': "25px", 'height': "40px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>
                        <div className="App" style={{ marginTop: "-10px", marginLeft: "-20px" }}>
                            {/* <button onClick={logout}>logout</button><br/><br/> */}
                            <CancelSharpIcon onClick={logout} sx={styles.tr} size={70} />


                        </div>
                        {/* <div className="App" style={{ marginTop: "-8.5px" }}>
                            <button onClick={Show}>Show</button><br /><br />
                        </div> */}
                        {/* <div className="kit" style={{ marginLeft: "900px", marginTop: "3px" }}>
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
                        <div style={{ 'textalign': "center", 'color': "black", 'marginDown': "20px" }}>
                        </div>
                        <div className="view">
                            <div className='main' style={{ width: '100%', 'display': "flex", 'marginLeft': "50px", 'marginRight': "50px", 'height': "auto", 'backgroundColor': "white", 'borderRadius': "20px" }}>
                                <img style={{ width: "180px", height: "150px", marginLeft: "20px" }} src="images/logo1.png" />
                                <div className='main1' style={{ 'padding': "150px 100px 50px 50px", marginLeft: "45px" }}>
                                    <h1 style={{ marginLeft: "-35px" }}>Teachers DashBoard</h1><br />
                                    {/* <h2>Welcome {nameget}</h2> */}
                                    {/* <p>Welcome Back!Please Enter Your Detail.</p><br/><br/> */}
                                    {/* <label htmlFor='name'>Name</label><br /><br />
                                <input type="text" name="name" id="name" placeholder='name' value={name} size="40" onChange={(e) => setname(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                {error.name && <p style={{ color: 'red' }}>{error.name}</p>} */}
                                    <label>Course</label><br /><br />
                                    <input type="text" disabled={true} name="course" id="course" placeholder='course' value={course} size="40" onChange={(e) => setcourse(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                    <select

                                        style={{ padding: "10px", width: "100%" }}
                                        name="course"
                                        id="course"
                                        placeholder="course"
                                        value={course}
                                        onChange={(e) => setcourse(e.target.value)} >

                                        <option placeholder="Type" value="">
                                            Courses
                                        </option>
                                        {cou.data.map((data, i) => (
                                            <option key={i} value={data.name}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select><br /><br />
                                    {error.course && <p style={{ color: 'red' }}>{error.course}</p>}
                                    <label>Qualification</label><br /><br />
                                    <input type="text"disabled={true} name="qualification" id="qualification" placeholder='qualification' value={qualification} size="40" onChange={(e) => setqualification(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                    <select

                                        style={{ padding: "10px", width: "100%" }}
                                        name="qualification"
                                        id="qualification"
                                        placeholder="qualification"
                                        value={qualification}
                                        onChange={(e) => setqualification(e.target.value)}>

                                        <option placeholder="Type" value="">
                                            Qualification
                                        </option>
                                        {qou.data.map((data, i) => (
                                            <option key={i} value={data.name}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select><br /><br />
                                    {error.qualification && <p style={{ color: 'red' }}>{error.qualification}</p>}
                                    <label>Experience</label><br /><br />
                                    <input type="text" name="experience" id="experience" placeholder='experience' value={experience} size="40" onChange={(e) => setexperience(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                    {error.experience && <p style={{ color: 'red' }}>{error.experience}</p>}
                                    <label>Address</label><br /><br />
                                    <input type="text" name="address" id="address" placeholder='Address' value={address} size="40" onChange={(e) => setaddress(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                    {error.address && <p style={{ color: 'red' }}>{error.address}</p>}
                                    <button name="check" id="check" onClick={submit}>Submit</button><br /><br />
                                    {/* <span className='form-input-login'>Don't have an account? <NavLink to="/login"style={{'color': "rgb(74, 74, 171)",'textDecoration':"none"}}>Sign up</NavLink></span> */}
                                    {/* <span> {error.check &&<p>{error.check}</p>}</span> */}
                                    <span> {loginError && <p>{loginError}</p>}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adteachremain
