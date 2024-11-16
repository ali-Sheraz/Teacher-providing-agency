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
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WindowIcon from '@mui/icons-material/Window';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChatIcon from '@mui/icons-material/Chat';
import cou from "../assets/course.json";
import k from "../assets/stu.json";
const Addsturemain = () => {
    const [name, setname] = useState("");
    const [typeget, settype] = useState("");
    const [nameget, setget] = useState("");
    const [emailget, setemget] = useState("");
    const [course, setcourse] = useState("");
    const [qualification, setqualification] = useState("");
    const [image, setimage] = useState("");
    const [experience, setexperience] = useState("");
    const [address, setaddress] = useState("");
    const [ID, setID] = useState(0)
    const [img, setimg] = useState("")
    const history = useNavigate();
    const [loginError, setLoginError] = useState(null);


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
        setID(JSON.parse(getuserarr)._id)
    }, [])
    // const [store,setStore]=useState([]);
    // const [data,setdata]=useState([]);
    console.log(ID)
    const [error, seterror] = useState({ validation });
    const submit = async e => {
        e.preventDefault();
        //  LoginEntry={ email : email , password : password };
        // console.log(LoginEntry);
        // setStore([...store,LoginEntry]);
        //   localStorage.setItem("store",store);
        seterror(validation(course, qualification));
        //  console.log(store);

        //    console.log(data);
    }
    const search = () => {
        history('/searchcour');
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
    const view = () => {
        history('/viewstu');
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
            error.course = "Invalid course Input";

        }
        else if (!qualification) {
            error.qualification = "Qualification Required";
        }

        else if (!qualification.match(letters)) {
            error.qualification = "Invalid qualification Input";

        }
        // else if (!experience) {
        //     error.experience = "Experience Required";
        // }
        // else if (experience <= 0) {
        //     error.experience = "Experience  must be  greater than 0";
        // }
        else if (!address) {
            error.address = "Address Required";
        }
        else {
            console.log("hello")
            axios.post("http://localhost:1337/api/updateData", { ID, course, qualification, address }).then((res) => {
                console.log("Response => ", res);
                setLoginError("Data Added")
                const data = JSON.parse(localStorage.getItem("UserData"))
                data.course = course
                data.qualification = qualification
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

    const logout = () => {
        // localStorage.removeItem("User_login");
        history('/stuhome');
    }
    const Show = () => {
        // localStorage.removeItem("User_login");
        history('/show');
    }
    const next = () => {
        history('/addsturemain');
    }
    const update = () => {
        history('/updatestu');
    }
    const home = () => {
        history('/stu');
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
                <div className='sidebar' style={{ height: "900px", width: "150px", backgroundColor: "#232B2B" }}>
                    <p onClick={next}>Add Data</p>
                </div>
                {/* <div className="sidepic">
                    <img src="images/addi.png" />
                </div> */}
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
                        <p style={{ marginLeft: "-130px" }} onClick={home}>Seminars</p>
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
                <div>
                    <section>
                        <div style={{ marginLeft: "60px", marginTop: "35px" }} class="content">
                            <h3>ADD</h3>
                            <h3>ADD</h3>
                        </div>
                    </section>
                    <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "80px", 'display': "flex", 'marginLeft': "35px", 'marginRight': "25px", 'height': "40px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>
                        <div className="App" style={{ marginTop: "-10px", marginLeft: "-20px" }}>
                            {/* <button onClick={logout}>logout</button><br/><br/> */}
                            <CancelSharpIcon onClick={logout} sx={styles.tr} size={70} />


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
                    <div>
                        <div style={{ 'textalign': "center", 'color': "black", 'marginDown': "20px" }}>
                        </div>
                        <div className="view">
                            <div className='main' style={{ width: "100%", boxShadow: "10px 10px 5px lightblue", 'display': "flex", 'marginLeft': "45px", 'marginRight': "50px", 'height': "auto", 'backgroundColor': "white", 'borderRadius': "20px" }}>
                                <img style={{ width: "180px", height: "150px", marginLeft: "20px" }} src="images/logo1.png" />
                                <div className='main1' style={{ 'padding': "150px 100px 50px 50px", marginLeft: "45px" }}>
                                    {/* <h1 style={{ marginLeft: "-70px" }}>Student DashBoard</h1> */}
                                    <h2>Welcome {nameget}</h2><br />
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
                                    <label>Qualification Level</label><br /><br />
                                    <input type="text" disabled={true}name="qualification" id="qualification" placeholder='qualification' value={qualification} size="40" onChange={(e) => setqualification(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                    <select

                                        style={{ padding: "10px", width: "100%" }}
                                        name="qualification"
                                        id="qualification"
                                        placeholder="qualification"
                                        value={qualification}
                                        onChange={(e) => setqualification(e.target.value)}  >

                                        <option placeholder="Type" value="">
                                            Qualification
                                        </option>
                                        {k.data.map((data, i) => (
                                            <option key={i} value={data.name}>
                                                {data.name}
                                            </option>
                                        ))}
                                    </select><br /><br />
                                    {error.qualification && <p style={{ color: 'red' }}>{error.qualification}</p>}
                                    <label>Address</label><br /><br />
                                    <input type="text" name="address" id="address" placeholder='Address' value={address} size="40" onChange={(e) => setaddress(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                    {error.address && <p style={{ color: 'red' }}>{error.address}</p>}
                                    {/* <label>Image</label>
                                <input className='img' type="file"></input> */}
                                    {/* <label>Experience</label><br /><br />
                                <input type="text" name="experience" id="experience" placeholder='experience' value={experience} size="40" onChange={(e) => setexperience(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                                {error.experience && <p style={{ color: 'red' }}>{error.experience}</p>} */}
                                    <button name="check" id="check" onClick={submit}>Submit</button><br /><br />
                                    {/* <span className='form-input-login'>Don't have an account? <NavLink to="/login"style={{'color': "rgb(74, 74, 171)",'textDecoration':"none"}}>Sign up</NavLink></span> */}
                                    {/* <span> {error.check &&<p>{error.check}</p>}</span> */}
                                    <span> {loginError && <p>{loginError}</p>}</span>
                                </div>
                                {/* <div style={{ 'marginLeft': "50px"}}>
         <img src="images/desktop.png" style={{'height': "100%", 'maxWidth': "100%", 'backgroundSize': "100%",'borderTopRightRadius':"20px",'borderBottomRightRadius':"20px" }} />
       </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Addsturemain