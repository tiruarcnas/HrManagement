import {BrowserRouter as Router } from "react-router-dom"
// import Login from "./components/Login/Login";
// g
import SelfServices from "./components/Pages/SelfServicesPages/SelfServices";
// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Login /> */}
        {/* <MiniDrawer/> */}
        < SelfServices />

      </Router>
    </div>
  );
}

export default App;
