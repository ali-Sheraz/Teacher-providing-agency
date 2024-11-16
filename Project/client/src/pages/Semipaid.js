import { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import "./card.css"
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import { useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WindowIcon from '@mui/icons-material/Window';
import ChatIcon from '@mui/icons-material/Chat';
const Semipaid = () => {
    // const [name,setname]=useState("");
    const data = useLocation()
    const [ID, setID] = useState(0)
    const [loginError, setLoginError] = useState(null);
    // console.log(data.state._id)
    const [feedback, setfeedback] = useState("");
    const [nameget, setget] = useState("");
    const [img, setimg] = useState("")
    const [seminar, setseminars] = useState("");
    const [course, setcourse] = useState([]);
    const [error, seterror] = useState({});
    const [name, setname] = useState("");
    const [c_no, setcard] = useState("");
    const [dat, setdate] = useState("");
    const [cvv, setcvv] = useState("");
    const [typeget, settype] = useState("");
    const [courseTeacher, setCourseTeacher] = useState([]);

    // const [courseTeacher2, setCourseTeacher2] = useState([]);

    // const [qualification,setqualification]=useState("");
    // const [experience,setexperience]=useState("");
    const history = useNavigate();
    const semi1 = useLocation()
    useEffect(() => {

        let getuserarr = localStorage.getItem("UserData");
        console.log("Get USer Arr => ", getuserarr);
        let obj = JSON.parse(getuserarr).Uname
        let obj1 = JSON.parse(getuserarr).Seminars;
        setseminars(obj1.length);
        console.log(JSON.parse(getuserarr).Uname)
        setget(obj);
        let obj8 = JSON.parse(getuserarr).img
        setimg(obj8)
        setID(JSON.parse(getuserarr)._id)
        let obj2 = JSON.parse(getuserarr).type
        settype(obj2);

    }, [])





    // const [store,setStore]=useState([]);
    // const [data,setdata]=useState([]);

    // const [error, seterror] = useState({ validation });
    const submit = async e => {
        e.preventDefault();
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        //   localStorage.setItem("store",store);
        seterror(validation(c_no, dat, cvv));

        //  console.log(store);

        //    console.log(data);
        // axios.get(`http://localhost:1337/api/recvseminar?data=` + JSON.stringify({
        //     seminarId: data.state._id,
        //     userID: JSON.parse(localStorage.getItem("UserData"))._id
        // })).then((result) => {
        //     // console.log(Seminar.length)
        //     // console.log("result => ", result?.data?.User)
        //     // alert("Enrolled");
        //     // setLoginError("Enrolled Successfully");
        //     setcourse(result && result?.data?.User);
        //     localStorage.setItem("UserData", JSON.stringify(result?.data?.User))
        //     console.log("seminar", result?.data?.User);
        //     alert(result.data.response)
        // })
    }
    // useEffect(() => {
    //     axios.get(`http://localhost:1337/api/recvseminar?data=`+JSON.stringify({
    //         seminarId:data.state._id,
    //         userID:JSON.parse(localStorage.getItem("UserData"))._id
    //     })).then((result) => {
    //         // console.log("result => ", result?.data?.User)
    //         setcourse(result && result?.data?.User);
    //         console.log(course);
    //     })

    // }, [])
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
    const path = () => {
        console.log("helllo");
        history('/stu');
    }
    function validation(c_no, dat, cvv) {
        let getuserarr = localStorage.getItem("UserData");
        let obj = JSON.parse(getuserarr)._id

        console.log("user", obj)
        console.log("semi ID=>" + semi1.state)
        let error = {};
     
        if (c_no.length < 16) {
            error.c_no = "Enter 16 Digit Card Number";
        }
        else if (!dat) {
            error.dat = "Expiry Date Required";
        }
        else if (!cvv) {
            error.cvv = "CVV Required";
        }
        else if (cvv.length < 3) {
            error.cvv = "Enter Valid Length of CVV";
        }
        else if (cvv.length > 3) {
            error.cvv = "Please Enter Valid Length of CVV";
        }
        else {

            console.log("hello")
            axios.post("http://localhost:1337/api/pospaymnt", {
                UserID: JSON.parse(getuserarr)._id,
                SeminarID: semi1.state,
                amount: 10,
                cvv: cvv,
                isRequest: false,
                c_no: c_no
            }).then((res) => {
                console.log("Response => ", res);
                alert("payment Inserted")
            }).catch(err => {
                console.log("err => ", err);
            })
        }

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
        return error;
    }
    const logout = () => {
        // localStorage.removeItem("User_login");
        history('/stu');
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
    // const semi = (user) => {
    //     history('/semi', {
    //         state: user
    //     });
    // }
    const nav = () => {
        history('/Semipaid');
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
    const log = {
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
                        <p style={{ marginLeft: "-112px" }} onClick={home}>Seminars</p>
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

                    <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "75px", 'display': "flex", 'marginLeft': "-65px", 'marginRight': "25px", 'height': "41px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "861px", 'padding': "10px" }}>

                        <div className="App" style={{ marginTop: "-10px", marginLeft: "-20px" }}>
                            {/* <button onClick={logout}>logout</button><br/><br/> */}
                            <CancelSharpIcon onClick={logout} sx={log.tr} size={70} />


                        </div>
                        {/* <div className="App" style={{ marginTop: "-8.5px", marginLeft: "-9px" }}>
                            <button onClick={logout}>logout</button><br /><br />

                        </div> */}
                        {/* <div className="App" style={{ marginTop: "-8.5px", marginLeft: "550px" }}>
                            <button onClick={change}>Change</button><br /><br />

                        </div> */}
                        {/* <div className="kit" style={{ marginLeft: "105%", marginTop: "4px" }}>
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


                            {/* <div style={{ marginRight: "900px" }} className="profile-info">
                                <h4 style={{ color: "Black" }}>Title:</h4>
                                <p style={{ color: "Black" }}>{data.state.title}</p>
                                <h4 style={{ color: "Black" }}>Description:</h4>
                                <p className="profile-detail">{data.state.description}</p>
                            </div> */}


                        </div>
                        <div style={{ marginTop: "-30px" }} className="profile-body">


                            <div className="profile-info">
                                <h3 style={{ color: "#007FFF" }} className="profile-heading">Enrolled Seminars</h3>
                                <p className="profile-detail">{seminar}</p>
                            </div>

                        </div>
                    </div>

                    {/* <div>
                        <div className="container-fluid">
                            {

                                <Card
                                    img="https://www.shutterstock.com/image-photo/open-laptop-isolated-white-screen-260nw-548778247.jpg"
                                    // title={data.state.title}
                                    // description={data.state.description}
                                    time={data.state.time}
                                    paid={data.state.paid}
                                />


                            }

                        </div>
                    </div> */}
                    <div className="profile-view">
                        <div style={{
                            backgroundColor: "white",
                            margin: "10px",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            textAlign: "center"
                        }}>
                          
                            <h1 style={{ color: "#007FFF" }}>Payment</h1><br />
                            {/* <label style={{ fontWeight: "bold" }} htmlFor='name'>Name</label><br /><br />
                            <input type="text" name="name" id="feedback" placeholder='name' value={name} size="40" onChange={(e) => setname(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none", }}></input><br /><br />
                            {error.name && <p style={{ color: 'red' }}>{error.name}</p>}<br /> */}
                            <label style={{ fontWeight: "bold" }} htmlFor='name'>Card Number</label><br /><br />
                            <input type="text" name="c_no" id="c_no" placeholder='Card Number' value={c_no} size="40" onChange={(e) => setcard(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none", }}></input><br /><br />
                            {error.c_no && <p style={{ color: 'red' }}>{error.c_no}</p>}<br />
                            <label style={{ fontWeight: "bold" }} htmlFor='name'>Expiry Date</label><br /><br />
                            <input type="date" name="dat" id="dat" placeholder='Date' value={dat} size="40" onChange={(e) => setdate(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none", }}></input><br /><br />
                            {error.dat && <p style={{ color: 'red' }}>{error.dat}</p>}<br />
                            <label style={{ fontWeight: "bold" }} htmlFor='name'>CVV</label><br /><br />
                            <input type="text" name="cvv" id="cvv" placeholder='CVV' value={cvv} size="40" onChange={(e) => setcvv(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none", }}></input><br /><br />
                            {error.cvv && <p style={{ color: 'red' }}>{error.cvv}</p>}<br />
                            <button name="check" id="check" onClick={submit} >Submit</button><br /><br />

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
    // function Card(props) {
    //     return (
    //         <>

    //             <div className="card" style={{ marginLeft: "700px", backgroundImage: `url(${"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VtaW5hcnxlbnwwfHwwfHw%3D&w=1000&q=80"})` }}>
    //                 <div className='card-Price'>
    //                     <p>${props.paid}</p>
    //                     <p>${props.time}</p>
    //                 </div>
    //                 <div className="card-content">
    //                     {/* <h2 className="card-title" >{props.title}</h2>
    //                     <p className="card-body">{props.description}</p> */}
    //                     {
    //                         props.paid.toLowerCase() === "free" && <button onClick={submit}>Enroll</button>
    //                     }
    //                     {
    //                         props.paid.toLowerCase() === "paid" && <button onClick={nav}>Pay Fee</button>
    //                     }

    //                 </div>

    //             </div>


    //         </>
    //     );
    // }
}

export default Semipaid
