import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPlayCircle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <FaPlayCircle className="logo-icon" />

        <span className="logo-text">
          CINE<span>ORA</span>
        </span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#recommendations">Movies</a></li>
        <li><a href="#actors">Actors</a></li>
        <li><a href="#prediction">Ratings</a></li>
        <li><a href="#project">Project</a></li>
      </ul>

      <div
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>
    </nav>
  );
}

export default Navbar;