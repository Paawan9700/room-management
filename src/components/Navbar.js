import React from "react";
import './../navbar.css'
const Navbar = () => {
  return (
    <div classNameName="container" style={{color:'red'}}>
      <nav>
        <input id="nav-toggle" type="checkbox"/>
        <ul className="links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <label for="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default Navbar;
