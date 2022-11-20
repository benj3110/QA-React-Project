import React from "react";
import { Link } from "react-router-dom";
import '../CSS/NavBar.css'



const NavBar = () => {
  return (
    
    //Nav wrap.
    //No 'li' or 'a href', 'Link' 'to' syntax instead.
  
    <nav className="Nav-Bar">
      <Link className="Nav-Link" to="/">
        {" "}
        Movie Stats App{" "}
      </Link>

      <Link className="Nav-Link" to="/Profile">
        {" "}
        Profile{" "}
      </Link>
    </nav>
  
  );
};

export default NavBar;
