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
const Formsucces = () => {
  const [name, setname] = useState("");
  const [nameget, setget] = useState("");
  const [course, setcourse] = useState("");
  const [qualification, setqualification] = useState("");
  const [experience, setexperience] = useState("");
  const history = useNavigate();
  const [loginError, setLoginError] = useState(null);
  useEffect(() => {
    let getuserarr = localStorage.getItem("UserData");
    console.log("Get USer Arr => ", getuserarr);
    let obj = JSON.parse(getuserarr).Uname
    console.log(JSON.parse(getuserarr).Uname)
    setget(obj);
    

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
    seterror(validation(name, course, qualification, experience));
    //  console.log(store);

    //    console.log(data);
  }

  function validation(email, password) {
    let letters = /^[A-Za-z]+$/;
    let error = {};
    if (!name) {
      error.name = "Name Required";
    }
    else if (!name.match(letters)) {
      error.name = "Name must only string";
    }
    else if (!course) {
      error.course = "Course Required";
    }
    else if (!course.match(letters)) {
      error.course = "course must only string";
    }
    else if (!qualification) {
      error.qualification = "Qualification Required";
    }
    else if (!experience) {
      error.experience = "Experience Required";
    }
    else if (experience <= 0) {
      error.experience = "Experience  must be  greater than 0";
    }
    else {
      axios.post("http://localhost:1337/api/courseTeacher", { name, course, qualification, experience }).then((res) => {
        console.log("Response => ", res);
        setLoginError("Data Added")
        alert("Inserted")
      }).catch(err => {
        console.log("err => ", err);
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
  const logout = () => {
    localStorage.removeItem("User_login");
    history('/new');
  }
  const Show = () => {
    // localStorage.removeItem("User_login");
    history('/show');
  }
  const next = () => {
    history('/adteachremain');
  }
  const search = () => {
    history('/');
  }
  const update = () => {
    history('/updteacher');
  }
  const home = () => {
    history('/view');
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

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className='sidebar' style={{ height: "100vh", width: "150px", backgroundColor: "#232B2B" }}>
          <p>Add Data</p>
        </div>
        <div className="sidepic">
          <AddBoxIcon onClick={next} sx={styles1.tr} size={70} />
        </div>
        <div style={{ marginTop: "105px" }}>
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
            <p onClick={home}>Home</p>
          </div>

        </div>
        {/* <div className="sidepic">
        <img src="images/addi.png" />
        </div> */}
        <div>
          <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "25px", 'display': "flex", 'marginLeft': "35px", 'marginRight': "25px", 'height': "40px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>
            <div className="App" style={{ marginTop: "-8.5px", marginLeft: "-9px" }}>
              <button onClick={logout}>logout</button><br /><br />


            </div>
            <div className="App" style={{ marginTop: "-8.5px" }}>
              <button onClick={Show}>Show</button><br /><br />
            </div>
            <div className="kit" style={{ marginLeft: "650px", marginTop: "-2px" }}>
              <p><span style={{ color: "grey" }}>Hellow,</span>{nameget}</p>
            </div>
            <div classname='image'>
              <img style={{ width: "50px", height: "50px", marginLeft: "5px", marginTop: "-15px", borderRadius: "50%" }} src="images/logo1.png" />

            </div>
            <div style={{ marginTop: "-33px", marginLeft: "-45px", fontSize: "35px" }}>
              <h1 style={{ color: "green" }}>.</h1>
            </div>
          </div>
          <div>
            <div style={{ 'textalign': "center", 'color': "black", 'marginDown': "20px" }}>
            </div>
            <div className='main' style={{ 'marginTop': "45px", 'display': "flex", 'marginLeft': "50px", 'marginRight': "50px", 'height': "auto", 'backgroundColor': "white", 'borderRadius': "20px" }}>
              <img style={{ width: "180px", height: "150px", marginLeft: "20px" }} src="images/logo1.png" />
              <div className='main1' style={{ 'padding': "150px 100px 50px 50px", marginLeft: "100px" }}>
                <h1 style={{ marginLeft: "20px" }}>Teachers DashBoard</h1>
                <h2>Welcome {nameget}</h2>
                {/* <p>Welcome Back!Please Enter Your Detail.</p><br/><br/> */}
                <label htmlFor='name'>Name</label><br /><br />
                <input type="text" name="name" id="name" placeholder='name' value={name} size="40" onChange={(e) => setname(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                <label>Course</label><br /><br />
                <input type="text" name="course" id="course" placeholder='course' value={course} size="40" onChange={(e) => setcourse(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                {error.course && <p style={{ color: 'red' }}>{error.course}</p>}
                <label>Qualification</label><br /><br />
                <input type="text" name="qualification" id="qualification" placeholder='qualification' value={qualification} size="40" onChange={(e) => setqualification(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                {error.qualification && <p style={{ color: 'red' }}>{error.qualification}</p>}
                <label>Experience</label><br /><br />
                <input type="text" name="experience" id="experience" placeholder='experience' value={experience} size="40" onChange={(e) => setexperience(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                {error.experience && <p style={{ color: 'red' }}>{error.experience}</p>}
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
    </>
  );
}

export default Formsucces