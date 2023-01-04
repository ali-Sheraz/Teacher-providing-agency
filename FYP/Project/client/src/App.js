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
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={<SignUpPage/>}/>
          <Route path="/login" element={<SignInPage/>}/>
          <Route path="/card" element={<Card/>}/>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Routes>
    </Router>
  );
}

export default App

