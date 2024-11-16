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
import WindowIcon from '@mui/icons-material/Window';
import validation from './validation';
import Person2Icon from '@mui/icons-material/Person2';
import PasswordIcon from '@mui/icons-material/Password';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import PaymentIcon from '@mui/icons-material/Payment';
import pai from "../assets/fil.json";
const Seminar = () => {
  const [name, setname] = useState("");
  const [nameget, setget] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [time, settime] = useState("");
  const [paid, setpaid] = useState("");
  const [addSeminar, setaddseminar] = useState("");
  const [flag, setflag] = useState(false);


  const history = useNavigate();
  const [img, setimg] = useState("")
  const [image, setImage] = useState("")
  const [loginError, setLoginError] = useState(null);
  const [typeget, settype] = useState("");
  useEffect(() => {
    let getuserarr = localStorage.getItem("UserData");
    console.log("Get USer Arr => ", getuserarr);
    let obj = JSON.parse(getuserarr).Uname
    console.log(JSON.parse(getuserarr).Uname)
    setget(obj);
    let obj2 = JSON.parse(getuserarr).type
    settype(obj2);
    let obj8 = JSON.parse(getuserarr).img
    setimg(obj8)

  }, [])
  // const [store,setStore]=useState([]);
  // const [data,setdata]=useState([]);

  const [error, seterror] = useState({ validation });
  const submit = async e => {
    e.preventDefault();
    const newEntry = { title: title, description: description, time: time, paid: paid };
    //  LoginEntry={ email : email , password : password };
    console.log(newEntry);
    // setStore([...store,LoginEntry]);
    //   localStorage.setItem("store",store);
    console.log("hello")
    seterror(validation(newEntry));
    if (newEntry.title.length === 0 || newEntry.description.length === 0 || newEntry.time.length === 0 || newEntry.paid.length === 0) {
      setflag(false);
      error.check1 = "invalid fields";
    }
    //  console.log(store);

    //    console.log(data);
    else {
      // setflag(true);
      // setaddseminar([...addSeminar,title, description, time, paid])
      console.log("newEntry", newEntry)
      var user = new FormData();
      user.append("title", newEntry.title);
      user.append("description", newEntry.description);
      user.append("time", newEntry.time);
      user.append("paid", newEntry.paid);
      if (image?.name) {
        user.append("img", "http://localhost:1337/uploads/" + image.name)
      }
      else {
        user.append("img", "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg")
      }
      user.append("uploadedImage", image);
      console.log(user.getAll)
      axios.post("http://localhost:1337/api/addseminar", user).then((res) => {
        console.log("Response => ", res.data);
        setLoginError("Data Added")
        console.log(user.data)
        alert("Inserted")
      }).catch(err => {
        console.log("err => ", err);
      })

    }

  }

  // function validation(values) {
  //   let letters = /^[A-Za-z]+$/;
  //   let error = {};
  //   if (!values.title) {
  //     error.title = "Title Required";
  //   }
  //   // else if (!title.match(letters)) {
  //   //   error.title = "Title must only string";
  //   // }
  //   else if (!values.description) {
  //     error.description = "Course Required";
  //   }
  //   // else if (!description.match(letters)) {
  //   //   error.description = "course must only string";
  //   // }
  //   else if (!values.time) {
  //     error.time = "Time Required";
  //   }
  //   else if (!values.paid) {
  //     error.paid = "Mode Required";
  //   }

  //   else {
  //     // setflag(true);
  //     // setaddseminar([...addSeminar,title, description, time, paid])
  //     console.log(values.newEntry)
  //     var user = new FormData();
  //     user.append("title", title);
  //     console.log(user.title);
  //     user.append("description", description);
  //     user.append("time", time);
  //     user.append("paid", paid);
  //     if (image?.name) {
  //       user.append("img", "http://localhost:1337/uploads/" + image.name)
  //     }
  //     else {
  //       user.append("img", "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg")
  //     }
  //     user.append("uploadedImage", image);
  //     console.log(user.title)
  //     axios.post("http://localhost:1337/api/addseminar", { user }).then((res) => {
  //       console.log("Response => ", res.data);
  //       setLoginError("Data Added")
  //       alert("Inserted")
  //     }).catch(err => {
  //       console.log("err => ", err);
  //     })

  //   }
  //   //      else
  //   //      {
  //   //       console.log("Email calling")
  //   //        axios.post('http://localhost:1337/api/login', {email ,password}).then((result)=>{
  //   //         console.log(result)
  //   //         alert("Loged in")
  //   //         history('/formsucces');
  //   //       }).catch((error)=>{
  //   //         console.log(error)
  //   //         error.check="invalid Credentials"
  //   //       })
  //   //     //      if(getuserarr && getuserarr.length)
  //   //     //      {      
  //   //     //          const userdata=JSON.parse(getuserarr); 
  //   //     //          // console.log(userdata);
  //   //     //          const userlogin=userdata.filter((el,k)=>{
  //   //     //               return el.email===values.email && el.password===values.password  
  //   //     //          });
  //   //     //          console.log(userlogin);
  //   //     //          if(userlogin.length===0)
  //   //     //          {
  //   //     //              error.check="Invalid Detail";
  //   //     //          }
  //   //     //          else
  //   //     //          {
  //   //     //              console.log("login successfully");
  //   //     //              localStorage.setItem("User_login",JSON.stringify(getuserarr));
  //   //     //             history('/formsucces');
  //   //     //          }
  //   //     //  }
  //   //  }
  //   return error;
  // }
  //   useEffect(() => {
  //     // Update the document title using the browser API
  //     if(flag===true)
  //     {
  //     localStorage.setItem("SeminarData",JSON.stringify(addSeminar)); 
  //     console.log(addSeminar);
  //     }
  //   },[addSeminar]);
  const logout = () => {
    localStorage.removeItem("User_login");
    history('/adminlogin');
  }
  const Show = () => {
    // localStorage.removeItem("User_login");
    history('/show');
  }
  const next = () => {
    history('/managestudent');
  }
  const search = () => {
    history('/updstutea');
  }
  const update = () => {
    history('/updadmin');
  }
  const home = () => {
    history('/seminar');
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
  const view = () => {
    history('/viewadmin');
  }
  const pass = () => {
    history('/changepassad');
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
    history('/showseminar');
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
      <div style={{ display: "flex" }}>
        <div className='sidebar' style={{ height: "120vh", width: "150px", backgroundColor: "#232B2B" }}>
          <p>View Data</p>
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
            <p onClick={search}>Management</p>
          </div>
          <div className="sidepic1" style={{ marginLeft: "-25px" }}>
            <HomeIcon onClick={home} sx={st.tr} size={70} />
          </div>
          <div className='sidebar1' style={{ marginLeft: "-25px", marginTop: "5px" }}>
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

        <div>
          <div style={{ boxShadow: "10px 10px 5px lightblue", 'marginTop': "25px", 'display': "flex", 'marginLeft': "35px", 'marginRight': "25px", 'height': "40px", 'backgroundColor': "white", 'borderRadius': "20px", 'width': "900px", 'padding': "10px" }}>
            <div className="App" style={{ marginTop: "-10px", marginLeft: "-20px" }}>
              {/* <button onClick={logout}>logout</button><br/><br/> */}
              <CancelSharpIcon onClick={logout} sx={styles.tr} size={70} />


            </div>

          </div>
          <div>
            <div style={{ 'textalign': "center", 'color': "black", 'marginDown': "20px" }}>
            </div>
            <div className="view">
              <div className='main' style={{ width: "100%", 'display': "flex", 'marginLeft': "50px", 'marginRight': "50px", 'height': "auto", 'backgroundColor': "white", 'borderRadius': "20px" }}>
                <img style={{ width: "180px", height: "150px", marginLeft: "20px" }} src="images/logo1.png" />
                <div className='main1' style={{ 'padding': "150px 100px 50px 50px", marginLeft: "47px" }}>
                  <h1 style={{}}>Add Seminar</h1><br />
                  {/* <h2>Welcome {nameget}</h2><br /> */}
                  {/* <p>Welcome Back!Please Enter Your Detail.</p><br/><br/> */}
                  <label htmlFor='name'>Tilte</label><br /><br />
                  <input type="text" name="title" id="title" placeholder='title' value={title} size="40" onChange={(e) => settitle(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                  {error.title && <p style={{ color: 'red' }}>{error.title}</p>}
                  <label>Description</label><br /><br />
                  <input type="text" name="description" id="description" placeholder='description' value={description} size="40" onChange={(e) => setdescription(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                  {error.description && <p style={{ color: 'red' }}>{error.description}</p>}
                  <label>Time</label><br /><br />
                  <input type="text" name="time" id="time" placeholder='time' value={time} size="40" onChange={(e) => settime(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                  {error.time && <p style={{ color: 'red' }}>{error.time}</p>}
                  <label>Free</label><br /><br />
                  <input type="text" disabled={true}name="paid" id="paid" placeholder='paid/free' value={paid} size="40" onChange={(e) => setpaid(e.target.value)} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
                  <select
                      
                      style={{padding:"10px",width:"100%"}}
                           name="paid"
                           id="paid"
                           placeholder="paid/free"
                           value={paid} 
                           onChange={(e) => setpaid(e.target.value)} >
                         
                           <option placeholder="Type" value="">
                             Mode
                           </option>
                           {pai.data.map((data, i) => (
                             <option key={i} value={data.name}>
                               {data.name}
                             </option>
                           ))}
                           </select><br /><br />
                  {error.paid && <p style={{ color: 'red' }}>{error.paid}</p>}
                  <label>Image</label><br /><br />
                  <input type="file" id="img" placeholder='img' size="40" onChange={(e) => setImage(e.target.files[0])} style={{ borderTopStyle: "none", borderLeftStyle: "none", borderRightStyle: "none" }}></input><br /><br />
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

export default Seminar