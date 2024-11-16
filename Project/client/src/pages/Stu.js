import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import axios from 'axios'
import "./card.css"
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WindowIcon from '@mui/icons-material/Window';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChatIcon from '@mui/icons-material/Chat';
const Stu = () => {
    // const [name,setname]=useState("");
    const [nameget, setget] = useState("");
    const [course, setcourse] = useState([]);
    const [courseTeacher, setCourseTeacher] = useState([]);
    const [img, setimg] = useState("")
    const [visibility, setVisibility] = useState(false)
    const [typeget, settype] = useState("");
    // const [courseTeacher2, setCourseTeacher2] = useState([]);

    // const [qualification,setqualification]=useState("");
    // const [experience,setexperience]=useState("");
    const history = useNavigate();
    useEffect(() => {

        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
        console.log(JSON.parse(getuserarr).Uname)
        let obj8 = JSON.parse(getuserarr).img
        setimg(obj8)
        setget(obj);
        let obj2 = JSON.parse(getuserarr).type
        settype(obj2);
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:1337/api/Getseminar`).then((result) => {
            // console.log("result => ", result?.data?.User)
            setcourse(result && result?.data?.User);
            console.log(course);
        })

    }, [])
    // useEffect(() => {
    //     if (course) {
    //         setCourseTeacher([])
    //         axios.get(`http://localhost:1337/api/SearchCourseTeacher/${course}`).then((result) => {
    //             console.log("result => ", result?.data?.User)
    //             setCourseTeacher(result && result?.data?.User);
    //         })
    //     } else {
    //         console.log("hello")
    //         axios.get("http://localhost:1337/api/GetCourseTeacher").then((result) => {
    //             console.log("result => ", result?.data?.User)
    //             setCourseTeacher(result && result?.data?.User);
    //         })
    //     }
    // }, [course])


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
    //     axios.post("http://localhost:1337/api/courseTeacher", { course }).then((res) => {
    //         console.log("Response => ", res);
    //         alert("Inserted")
    //     }).catch(err => {
    //         console.log("err => ", err);
    //     })


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
    const view = () => {
        history('/viewstu');
    }
    const change = () => {
        history('/changepass');
    }
    const pass = () => {
        history('/changepass');
    }
    const semi = (user) => {
        history('/semi', {
            state: user
        });
    }
    const semi1 = (user) => {
        history('/semi', {
            state: user
        });
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
    // const dec = () => {
    //     // localStorage.removeItem("User_login");
    //     history('/show');
    // }
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    // const suw = () => {
    //     history('/new');
    //   }
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
                <div className="hom" style={{ marginTop: "-56px", marginLeft: "800px" }}>
                    <button onClick={change}>Change</button><br /><br />

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


                <div className='sidebar' style={{ height: "90rem", width: "150px", backgroundColor: "#232B2B" }}>
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
                        <HomeIcon onClick={home} sx={st.tr} size={70} />
                    </div>
                    <div className='sidebar1'>
                        <p   style={{ marginLeft: "-130px" }}onClick={home}>Seminars</p>
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
                <section>
                    <div style={{ marginLeft: "90px", marginTop: "35px" }} class="content">
                        <h3>SEMINAR</h3>
                        <h3>SEMINAR</h3>
                    </div>
                </section>
                <div>

                    {/* <h1 style={{ textAlign: "center", marginTop: "15px" }}>Welcome to <span style={{ color: "grey", fontStyle: "italic" }}>Expert Hub</span>
                    </h1> */}

                    <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "80px", 'display': "flex", 'marginLeft': "-65px", 'marginRight': "25px", 'height': "41px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "861px", 'padding': "10px" }}>

                        {/* <div className="App" style={{ marginTop: "-8.5px", marginLeft: "-9px" }}>
                            <button onClick={logout}>logout</button><br /><br />

                        </div>
                        <div className="App" style={{ marginTop: "-8.5px", marginLeft: "550px" }}>
                            <button onClick={change}>Change</button><br /><br />

                        </div> */}
                        {/* <div className="kit" style={{ marginLeft: "50px", marginTop: "4px" }}>
                            <p><span style={{ color: "grey" }}>Hellow,</span>{nameget}</p>
                        </div>
                        <div classname='image'>
                            <img style={{ width: "50px", height: "50px", marginLeft: "5px", marginTop: "-15px", borderRadius: "50%" }} src={img} />


                        </div>
                        <div style={{ marginTop: "-32px", marginLeft: "-45px", fontSize: "35px" }}>
                            <h1 style={{ color: "green" }}>.</h1>
                        </div> */}

                    </div>
                    <div style={{ marginLeft: "-80px", width: "120%", marginBottom: "10px" }} className="profile-view">
                        <div className="profile-body">


                            <div className="profile-info">
                                <h3 style={{ color: "#007FFF" }} className="profile-heading">Total Seminar</h3>
                                <p className="profile-detail">{course.length}</p>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="container-fluid">
                            {
                                course.map((user) => (
                                    <Card
                                        _id={user._id}
                                        img={user.img || "https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
                                        title={user.title}
                                        description={user.description}
                                        time={user.time}
                                        paid={user.paid}
                                    />

                                ))
                            }

                        </div>
                    </div>

                </div>
            </div>
        </>

    );
    function Card(props) {
        console.log(props.img)
        return (
            <div className="card" style={{backgroundImage:`url(${props.img})`}}>

                <div style={{position:"absolute"}} className='card-Price'>
                    <p>{props.paid === "paid" ? "$" + 10 : "Free"} </p>
                </div>
                <div className="card-content">
                    <h2 className="card-title" >{props.title}</h2>
                    <p className="card-body">{props.description}</p>
                    {
                        props.paid.toLowerCase() === "free" && <button onClick={() => semi(props)}>View</button>

                    }
                    {
                        props.paid.toLowerCase() === "paid" && <button onClick={() => semi1(props)}>View</button>

                    }

                </div>
            </div>
        );
    }
}

export default Stu