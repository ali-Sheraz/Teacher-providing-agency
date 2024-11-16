import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom"
import New from './pages/New';
import Formsucces from './pages/Formsucces';
import Show from './pages/Show';
import Stu from './pages/Stu';
import Addsturemain from './pages/Addsturemain';
import Updatestu from './pages/Updatestu';
import Searchcour from './pages/Searchcour';
import Adteachremain from './pages/Adteachremain';
import Updteacher from './pages/Updteacher';
import Search from './pages/Search';
import View from './pages/View';
import Viewstu from './pages/Viewstu';
import Seminar from './pages/Seminar';
import Changepass from './pages/Changepass';
import Semi from './pages/Semi';
import Mylearning from './pages/Mylearning';
import Semipaid from './pages/Semipaid';
import Changepasst from './pages/Changepasst';
import Changepassad from './pages/Changepassad';
import Home from './pages/Home';
import Ans from './pages/Ans';
import Stuhome from './pages/Stuhome';
import Teachome from './pages/Teachome';
import Adminlogin from './pages/Adminlogin';
import Loginad from './pages/Loginad';
import Managestudent from './pages/Managestudent';
import Updadmin from './pages/Updadmin';
import Viewadmin from './pages/Viewadmin';
import Updstutea from './pages/Updstutea';
import Showseminar from './pages/Showseminar';
import Chat from './pages/Chat';
import Hire from './pages/Hire';
import Hireteac from './pages/Hireteac';
import Verification from './pages/Verification';
import Payment from './pages/Payment';
import Data from './pages/Data';
import Time from './pages/Time';
function App() {
  return (
  <Routes>
  <Route exact path='/'element= {<Home />}/>
  <Route path='/login'element= {<Login />}/>
  <Route exact path='/new'element= {<New />}/>
  <Route path='/formsucces'element= {<Formsucces />}/>
  <Route path='/show'element={<Show/>}/>
  <Route path='/stu'element={<Stu/>}/>
  <Route path='/addsturemain'element= {<Addsturemain />}/>
  <Route path='/updatestu'element= {<Updatestu />}/>
  <Route path='/searchcour'element= {<Searchcour />}/>
  <Route path='/adteachremain'element= {<Adteachremain />}/>
  <Route path='/updteacher'element= {<Updteacher />}/>
  <Route path='/search'element= {<Search />}/>
  <Route path='/view'element= {<View />}/>
  <Route path='/viewstu'element= {<Viewstu />}/>
  <Route path='/seminar'element= {<Seminar />}/>
  <Route path='/changepass'element= {<Changepass />}/>
  <Route path='/changepassad'element= {<Changepassad />}/>
  <Route path='/semi' element= {<Semi/>}/>
  <Route path='/mylearning' element= {<Mylearning/>}/>
  <Route path='/Semipaid' element= {<Semipaid/>}/>
  <Route path='/changepasst' element= {<Changepasst/>}/>
  <Route path='/ans' element= {<Ans/>}/>
  <Route path='/stuhome' element= {<Stuhome/>}/>
  <Route path='/teachome' element= {<Teachome/>}/>
  <Route path='/adminlogin' element= {<Adminlogin/>}/>
  <Route path='/loginad' element= {<Loginad/>}/>
  <Route path='/managestudent' element= {<Managestudent/>}/>
  <Route path='/updadmin' element= {<Updadmin/>}/>
  <Route path='/viewadmin' element= {<Viewadmin/>}/>
  <Route path='/updstutea' element= {<Updstutea/>}/>
  <Route path='/showseminar' element= {<Showseminar/>}/>
  <Route path='/hire' element= {<Hire/>}/>
  <Route path='/hireteac' element= {<Hireteac/>}/>
  <Route path='/chat' element= {<Chat/>}/>
  <Route path='/verification' element= {<Verification/>}/>
  <Route path='/payment' element= {<Payment/>}/>
  <Route path='/data' element= {<Data/>}/>
  <Route path='/time' element= {<Time/>}/>
  {/* <Route path='/home' element= {<Home/>}/> */}
  </Routes>
  );
}

export default App;
 