import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Profile from "./Profile";


const NavBar = () => {
  return (
    // Router wrap over everything.
    //Nav wrap.
    //No 'li' or 'a href', 'Link' 'to' syntax instead.
    //'Routes' wrap for all routes.
    //Route wrap for a individual route, path for page path and element for the component to call.
    <div>
      <Router>
        <nav>
          <Link className="LinkClass" to="/">
            {" "}
            Movie Stats App{" "}
          </Link>
          <Link className="LinkClass" to="/Profile">
            {" "}
            Profile{" "}
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>,
    </div>
  );
};

export default NavBar;
