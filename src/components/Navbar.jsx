import React, { useState } from "react";
import "./Navbar.css";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaPlayCircle } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="logo" onClick={closeMenu}>
          <FaPlayCircle className="logo-icon" />
          <span className="logo-text">
            CINE<span>ORA</span>
          </span>
        </a>

        {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#recommendations" onClick={closeMenu}>Movies</a></li>
          <li><a href="#actors" onClick={closeMenu}>Actors</a></li>
          <li><a href="#prediction" onClick={closeMenu}>Ratings</a></li>
          <li><a href="#project" onClick={closeMenu}>Project</a></li>
        </ul>

        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;