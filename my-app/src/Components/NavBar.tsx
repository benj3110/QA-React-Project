import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    
    //Nav wrap.
    //No 'li' or 'a href', 'Link' 'to' syntax instead.
    
    <div>
      <nav>
        <Link className="HomeLink" to="/">
          {" "}
          Movie Stats App{" "}
        </Link>
        
        <Link className="ProfileLink" to="/Profile">
          {" "}
          Profile{" "}
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
