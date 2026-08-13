import { useState } from "react";
import "./Navbar.css";
import {  FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="">
       <a href="#home" className="logo"> FELZ.Net</a>
      </div>

      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
      >
         {isOpen ? <FaTimes /> : <RxHamburgerMenu/>}
      </button>
    </nav>
  );
}


export default Navbar