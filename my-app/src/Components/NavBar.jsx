import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Profile from "./Profile";


const NavBar = () => {
  return (
    <Router>
      <nav>
        <Link className="LinkClass" to = "/"> Home </Link>
        <Link className="LinkClass" to = "/Profile"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default NavBar;
