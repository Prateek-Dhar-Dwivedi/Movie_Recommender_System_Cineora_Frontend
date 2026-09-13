import React from "react";
import "./Footer.css";

import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-col">
          <h2>Cineora</h2>

          <p>
            AI-powered movie recommendation
            platform helping users discover
            amazing films effortlessly.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#recommendations">Movies</a>
          <a href="#actors">Actors</a>
          <a href="#prediction">Prediction</a>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>

          <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB Database</a>
          <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noreferrer">TMDB API</a>
          <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer">Machine Learning</a>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">React Documentation</a>
          <a href="https://github.com/Prateek-Dhar-Dwivedi/Movie_Recommender_System_Cineora" target="_blank" rel="noreferrer">GitHub</a>

        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>

          <div className="socials">
            <a href="https://www.facebook.com/p.dwivedi.2025" target="_blank" rel="noreferrer" aria-label="Facebook Profile"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/prateek-dhar-dwivedi/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile"><FaLinkedinIn /></a>
            <a href="https://x.com/prateekdhar145" target="_blank" rel="noreferrer" aria-label="X Twitter Profile"><FaXTwitter /></a>
            <a href="https://github.com/Prateek-Dhar-Dwivedi" target="_blank" rel="noreferrer" aria-label="GitHub Profile"><FaGithub /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Cineora. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;