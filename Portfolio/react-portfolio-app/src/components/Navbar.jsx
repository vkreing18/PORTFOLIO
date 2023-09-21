import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./navbar.css";
// react-scroll
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">𝐒𝐀𝐇𝐈𝐃</div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="home" spy={true} smooth={true} offset={-100}>Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-100}>About</Link>
        <Link to="company" spy={true} smooth={true} offset={-100}>Skills</Link>
        <Link to="project" spy={true} smooth={true} offset={-100}>Projects</Link>
        </div>
        <div>
        <Link to="contact" spy={true} smooth={true} offset={-100}>
        <button className="btn-outline">Contact</button>
      </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaXmark /> : <FaBars />}
        </div>
      </div>
      {/* only mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "visible" : "hidden"}`}>
        <Link to="home" onClick={toggleMenu} spy={true} smooth={true} offset={-100}>Home</Link>
        <Link to="about" onClick={toggleMenu} spy={true} smooth={true} offset={-100}>About</Link>
        <Link to="company" onClick={toggleMenu} spy={true} smooth={true} offset={-100}>Skills</Link>
        <Link to="project" onClick={toggleMenu} spy={true} smooth={true} offset={-100}>Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;