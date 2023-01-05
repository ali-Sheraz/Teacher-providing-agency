import React from 'react';
import Card from './components/basics/card'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<SignUpPage/>}/>
          <Route exact path="/" element={<SignInPage/>}/>
          <Route path="/card" element={<Card/>}/>
        </Routes>
    </Router>
  );
}

export default App

