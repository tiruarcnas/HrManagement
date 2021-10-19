import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StylishSidebar from './components/Login/Login';
import MiniDrawer from './components/DashBoard/Dashboard';
function App() {
  return (
    <Router>
    <Switch>
      {/* <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/Regstion">
        <Regstion />
      </Route> */}
      <MiniDrawer />
    </Switch>
  </Router>
    // <div>
    //   <BrowserRouter>
        
    //     <Route exact path="/Dashbord">
    //       <ResponsiveDrawer />
    //     </Route>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;


