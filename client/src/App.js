import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Singup from "./Login/SingUp";
import ForgotPassword from "./Login/ForgotPassword";
 import AdminDashBoard from "./DashBoard/AdminDashBoard";
import Park from './Pages/Park';
import Novotel from "./Pages/Novotel";
import Update from './components/Update'
import Read from './components/Read'
import './App.css'
//import UserDashBoard from './DashBoard/UserDashBoard'

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login setLoginUser={setLoginUser} />
        </Route>
        <Route path="/signup"> 
          <Singup />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/admin">
          {user && user._id ? (
            <AdminDashBoard />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}
        </Route>
        <Route path="/park">
          <Park />
        </Route>
        <Route path="/novotel">
          <Novotel />
        </Route>
        <Route path="/update">
          <Update/>
        </Route>
        <Route path="/read">
          <Read/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
  