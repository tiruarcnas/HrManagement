import React, { useState, createContext } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Singup from './components/Login/SingUp';
import Forgotpassword from './components/Login/ForgotPassword';
import MiniDrawer from './components/DashBoard/Dashboard';

export const store = createContext();
function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Singup />
          </Route>
          <Route exact path="/forgotpassword">
            <Forgotpassword />
          </Route>
          <Route exact path="/dashbord">
            <MiniDrawer />
          </Route>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
