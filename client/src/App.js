import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Singup from './components/Login/SingUp';
import Forgotpassword from './components/Login/ForgotPassword';
import MiniDrawer from './components/DashBoard/Dashboard'
import AdminDashBoard from './components/Pages/DashBoardPages/AdminDashBoard';

export const store = createContext();
function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <Router>
       
          {/* <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Singup />
          </Route>
          {/* <Route exact path="/forgotpassword">
            <Forgotpassword />
          </Route> */}
          {/* <Route path="/dashboard">
            <MiniDrawer />
          </Route> */}
          
          {/* <Route >
          <AdminDashBoard />
          </Route> */} */}
         
        </Router>
      </store.Provider>
    </div>
  );
}

export default App;
