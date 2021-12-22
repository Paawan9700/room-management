import React from "react";
import './../navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container" style={{color:'red'}}>
      <nav>
        <input id="nav-toggle" type="checkbox"/>
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu">Admin Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
