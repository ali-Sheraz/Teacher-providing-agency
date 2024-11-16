// import * as React from 'react';
// import Table from '@mui/material/Table';
// import { useEffect, useState,useRef } from 'react';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import SystemUpdateIcon from '@mui/icons-material/SystemUpdate';
// import CancelSharpIcon from '@mui/icons-material/CancelSharp';
// import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
// import HomeIcon from '@mui/icons-material/Home';
// import Person2Icon from '@mui/icons-material/Person2';
// import PasswordIcon from '@mui/icons-material/Password';
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import WindowIcon from '@mui/icons-material/Window';
// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
// import ChatIcon from '@mui/icons-material/Chat';
// import { auth,database,analytics } from './firebase';
// import './chat.cs'
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// export default function BasicTable() {
//     const [nameget, setget] = useState("");
//     const [typeget, settype] = useState("");
//     // const [courseTeacher, setCourseTeacher] = useState([
//     //     {
//     //         name: JSON.parse(localStorage.getItem("UserData")).name,
//     //         qualification: JSON.parse(localStorage.getItem("UserData")).qualification,
//     //         course: JSON.parse(localStorage.getItem("UserData")).couse,
//     //         experience: JSON.parse(localStorage.getItem("UserData")).name
//     //     }
//     // ]);
//     //   const [Uname, setname] = useState("");
//     //   const [nameget, setget] = useState("");
//     //   const [course, setcourse] = useState("");
//     //   const [qualification, setqualification] = useState("");
//     //   const [experience, setexperience] = useState("");
//     const [loc, setloc] = useState("");
//     const history = useNavigate();
//     const [img, setimg] = useState("")
//     const [update, setUpdate] = useState({})
//     const [loginError, setLoginError] = useState(null);
//     const [error, seterror] = useState({});
//     const [visibility, setVisibility] = useState(false)
//     const [user1, setUser] = useState({})
//     let [seminars, setseminars] = useState([])
      
//     const submit = async e => {
//         e.preventDefault();
//         // alert(JSON.stringify(user))
//         //  LoginEntry={ email : email , password : password };
//         // console.log(LoginEntry);
//         // setStore([...store,LoginEntry]);
//         // localStorage.setItem("store",store);
//         // seterror(validation(name,course,qualification,experience));
//         //  console.log(store);
//         console.log(user)
//         axios.put("http://localhost:1337/api/updateUser", user).then((result) => {
//             console.log(result.data)
//             console.log(user);
//             setUser(result.data);
//             setUpdate(result.data)
//             localStorage.setItem("UserData", JSON.stringify(user))
//             console.log(user)
//             setVisibility(false)
//             setLoginError("Data Updated Successfully");
//             alert("Updated")
//             console.log(user)
//         })
//     }

//     const next = () => {
//         history('/adteachremain');
//     }
//     const logout = () => {
//         // localStorage.removeItem("User_login");
//         history('/stuhome');
//     }
//     const styles = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-360%',
//             marginTop: '180%',
//             size: '90px'
//         }
//     }
//     const style = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const styl = {
//         tr: {
//             // background: "white",
//             '&:hover': {
//                 // background: '#FF2E2E',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '25%',
//             // marginTop: '1%',
//             fontSize: '250%'
//         }
//     }
//     const sty = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const st = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const s = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const pass = () => {
//         history('/changepasst');
//     }
//     const p = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const l = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const lear = () => {
//         history('/chat');
//     }
//     const view = () => {
//         history('/view');
//     }

//     const home = () => {
//         history('/stu');
//     }
//     const search = () => {
//         history('/searchcour');
//     }
//     const up = () => {
//         history('/updteacher');
//     }

  
//     const unenrolledHandller = (semi, oldindex) => {
//         console.log(semi._id)
//         const user = JSON.parse(localStorage.getItem("UserData"))
//         axios.delete("http://localhost:1337/api/deleteSeminar?id=" + JSON.stringify({
//             userID: user._id,
//             seminarID: semi._id
//         })).then((result) => {
//             seminars = seminars.filter((id, index) => {
//                 return index != oldindex
//             })
//             setseminars(seminars)
//             localStorage.setItem("UserData", JSON.stringify(result.data.User))

//         }).catch(() => {
//             console.log(error)
//         })
//     }
//     useEffect(() => {
//         let getuserarr = JSON.parse(localStorage.getItem("UserData"));
//         console.log("Get USer Arr => ", getuserarr);
//         axios.get('http://localhost:1337/api/recUsersvseminar?data=' + JSON.stringify({
//             userID: getuserarr._id
//         })).then((result) => {
//             console.log("response",result)
//             setseminars(result.data.User.Seminars)
//         })
//     }, [])
//     useEffect(() => {
//         let getuserarr = localStorage.getItem("UserData");
//         console.log("Get USer Arr => ", getuserarr);
//         let obj = JSON.parse(getuserarr).Uname
//         let obj8 = JSON.parse(getuserarr).img
//         setimg(obj8)
//         console.log(JSON.parse(getuserarr).Uname)
//         let obj1 = JSON.parse(getuserarr).type
//         settype(obj1);
//         setget(obj);


//     }, [])
//     const [user] = useAuthState(auth);
//     const su = () => {
//         history('/ans');
//     }
//     const hm = () => {
//         history('/teachome');
//     }
//     const h = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const r = {
//         tr: {
//             background: "gray",
//             '&:hover': {
//                 background: '#FFBF00',
//                 transform: 'scale(1.2)',
//             },
//             transition: 'transform 500ms ease',
//             marginLeft: '-330%',
//             marginTop: '110%',
//             size: '90px'
//         }
//     }
//     const re = () => {
//         history('/hireteac');
//     }
    
//     return (
//         <>

//                   <header>
//         <h1>⚛️🔥💬</h1>
//         <SignOut />
//       </header>

//       <section>
//         { <ChatRoom /> }
//       </section>

//             {console.log("User  => ", user)}
            
//         </>
//     );

// }
// function SignIn() {

//     const signInWithGoogle = () => {
//       const provider = auth.GoogleAuthProvider();
//       auth.signInWithPopup(provider);
//     }
  
//     return (
//       <>
//         <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//         <p>Do not violate the community guidelines or you will be banned for life!</p>
//       </>
//     )
  
//   }
  
//   function SignOut() {
//     return auth.currentUser && (
//       <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//     )
//   }
  
  
//   function ChatRoom() {
//     const dummy = useRef();
//     const messagesRef = database.collection('messages');
//     const query = messagesRef.orderBy('createdAt').limit(25);
  
//     const [messages] = useCollectionData(query, { idField: 'id' });
  
//     const [formValue, setFormValue] = useState('');
  
  
//     const sendMessage = async (e) => {
//       e.preventDefault();
  
//       const { uid, photoURL } = auth.currentUser;
  
//       await messagesRef.add({
//         text: formValue,
//         createdAt: database.FieldValue.serverTimestamp(),
//         uid,
//         photoURL
//       })
  
//       setFormValue('');
//       dummy.current.scrollIntoView({ behavior: 'smooth' });
//     }
  
//     return (<>
//       <main>
  
//         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
//         <span ref={dummy}></span>
  
//       </main>
  
//       <form onSubmit={sendMessage}>
  
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
//         <button type="submit" disabled={!formValue}>🕊️</button>
  
//       </form>
//     </>)
//   }
  
  
//   function ChatMessage(props) {
//     const { text, uid, photoURL } = props.message;
  
//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
//     return (<>
//       <div className={`message ${messageClass}`}>
//         <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//         <p>{text}</p>
//       </div>
//     </>)
//   }
  