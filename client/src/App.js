import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import StylishSidebar from './components/Login/Login';
import ResponsiveDrawer from './components/DashBoard/Dashboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <StylishSidebar />
        </Route>
        <Route exact path="/Dashbord">
          <ResponsiveDrawer />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
