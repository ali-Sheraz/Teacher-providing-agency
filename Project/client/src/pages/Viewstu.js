import { useEffect, useState } from 'react'
import New from './New'
import Show from './Show'
import Login from './Login';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WindowIcon from '@mui/icons-material/Window';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChatIcon from '@mui/icons-material/Chat';
const Viewstu = () => {

    const [nameget, setget] = useState("");
    const [emailget, setget1] = useState("");
    const [typeget, setget2] = useState("");
    const [locget, setget3] = useState("");
    const [courseget, setget4] = useState("");
    const [experienceget, setget5] = useState("");
    const [qualificationget, setget6] = useState("");
    const [addressget, setget7] = useState("");
    const [img, setimg] = useState("")
    // const [course, setcourse] = useState("");
    // const [qualification, setqualification] = useState("");
    // const [experience, setexperience] = useState("");
    // const [name, setname] = useState("");
    // const [loginError, setLoginError] = useState(null); 
    // const [store,setStore]=useState([]);
    // const [data,setdata]=useState([]);
    // const [error, seterror] = useState({ validation });  

    const history = useNavigate();

    useEffect(() => {
        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
        let obj1 = JSON.parse(getuserarr).email
        let obj2 = JSON.parse(getuserarr).type
        let obj3 = JSON.parse(getuserarr).loc
        let obj4 = JSON.parse(getuserarr).course
        let obj5 = JSON.parse(getuserarr).experience
        let obj6 = JSON.parse(getuserarr).qualification
        let obj7 = JSON.parse(getuserarr).address
        let obj8 = JSON.parse(getuserarr).img
        console.log(JSON.parse(getuserarr).Uname)
        console.log(JSON.parse(getuserarr).type)
        setget(obj);
        setget1(obj1);
        setget2(obj2);
        setget3(obj3);
        setget4(obj4);
        setget5(obj5);
        setget6(obj6);
        setget7(obj7);
        setimg(obj8)

    }, [])

    const submit = async e => {
        e.preventDefault();
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        //   localStorage.setItem("store",store);
        // seterror(validation(name, course, qualification, experience));
        //  console.log(store);
        //    console.log(data);
    }

    // function validation(email, password) {
    //     let letters = /^[A-Za-z]+$/;
    //     let error = {};
    //     if (!name) {
    //         error.name = "Name Required";
    //     }
    //     else if (!name.match(letters)) {
    //         error.name = "Name must only string";
    //     }
    //     else if (!course) {
    //         error.course = "Course Required";
    //     }
    //     else if (!course.match(letters)) {
    //         error.course = "course must only string";
    //     }
    //     else if (!qualification) {
    //         error.qualification = "Qualification Required";
    //     }
    //     else if (!experience) {
    //         error.experience = "Experience Required";
    //     }
    //     else if (experience <= 0) {
    //         error.experience = "Experience  must be  greater than 0";
    //     }
    //     else {
    //         axios.post("http://localhost:1337/api/courseTeacher", { name, course, qualification, experience }).then((res) => {
    //             console.log("Response => ", res);
    //             setLoginError("Data Added")
    //             alert("Inserted")
    //         }).catch(err => {
    //             console.log("err => ", err);
    //         })

    //     }
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
        localStorage.removeItem("User_login");
        history('/new');
    }
    // const Show = () => {
    //     // localStorage.removeItem("User_login");
    //     history('/show');
    // }
    const next = () => {
        history('/addsturemain');
    }
    const search = () => {
        history('/searchcour');
    }
    const update = () => {
        history('/updatestu');
    }
    const home = () => {
        history('/stu');
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
        history('/viewstu');
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
                <div className="hom" style={{ marginTop: "-55px", marginLeft: "970px" }}>
                    <button onClick={logout}>logout</button><br /><br />

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
                <div className='sidebar' style={{ height: "100vh", width: "150px", backgroundColor: "#232B2B" }}>
                    <p>Add Data</p>
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
                {/* <div className="sidepic">
        <img src="images/addi.png" />
        </div> */}
                <div>
                    <section>
                        <div style={{ marginLeft: "90px", marginTop: "35px" }} class="content">
                            <h3>Profile</h3>
                            <h3>Profile</h3>
                        </div>
                    </section>
                    <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "80px", 'display': "flex", 'marginLeft': "35px", 'marginRight': "25px", 'height': "40px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>
                        {/* <div className="App" style={{ marginTop: "-8.5px", marginLeft: "-9px" }}>
                            <button onClick={logout}>logout</button><br /><br />


                        </div> */}
                        {/* <div className="App" style={{ marginTop: "-8.5px" }}>
                            <button onClick={Show}>Show</button><br /><br />
                        </div> */}
                        {/* <div className="kit" style={{ marginLeft: "790px", marginTop: "5px" }}>
                            <p><span style={{ color: "grey" }}>Hellow,</span>{nameget}</p>
                        </div>
                        <div classname='image'>
                            <img style={{ width: "50px", height: "50px", marginLeft: "5px", marginTop: "-15px", borderRadius: "50%" }} src={img} />

                        </div>
                        <div style={{ marginTop: "-33px", marginLeft: "-45px", fontSize: "35px" }}>
                            <h1 style={{ color: "green" }}>.</h1>
                        </div> */}
                    </div>
                    <div className="profile-view">
                        <div className="profile-header">
                            <img src={img} className="profile-image" />
                            <h2 className="profile-name">{nameget}</h2>
                            <p className="profile-description">{typeget}</p>
                        </div>
                        <div className="profile-body">
                            <div className="profile-info">
                                <h3 className="profile-heading">Contact Information</h3>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Email:</span>{emailget}</p>
                                {/* <p className="profile-detail">Phone: (123) 456-7890</p> */}
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Address:</span>{addressget}</p>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Location:</span>{locget}</p>
                            </div>
                            <div className="profile-info">
                                <h3 className="profile-heading">Skills</h3>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Interest:</span>{courseget}</p>
                                {/* <p className="profile-detail">Node.js</p>
                                <p className="profile-detail">JavaScript</p>
                                <p className="profile-detail">HTML/CSS</p> */}
                            </div>
                            <div className="profile-info">
                                <h3 className="profile-heading">Profession</h3>
                                <p className="profile-detail">{typeget}</p>
                            </div>
                            <div className="profile-info">
                                <h3 className="profile-heading">Education</h3>
                                <p className="profile-detail"><span style={{ fontWeight: "bold" }}>Qualification:</span>{qualificationget}</p>


                                {/* <p className="profile-detail">B.S. Computer Science, University of Anytown, 2015-2019</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Viewstu