import React from "react";
import "./ProjectInfo.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiExpress,
  SiFlask,
  SiVercel,
  SiRender,
} from "react-icons/si";


function ProjectInfo() {
  return (
    <section className="project-section" id="project">
      <div className="project-info">
        <h2>
          Discover Your Next Favorite Movie with
          Machine Learning
        </h2>

        <p>
          This project utilizes the TMDB (The Movie Database)
          dataset and a Machine Learning recommendation engine
          to provide personalized movie suggestions based on
          content similarity and user preferences.
        </p>

        <p>
          The recommendation model is developed in Python and
          served through a Flask-based ML service deployed on
          Render. A Node.js backend communicates with the ML
          service, processes API requests, and delivers
          recommendations efficiently to users.
        </p>

        <p>
          The backend is hosted on Render, while the frontend
          is built using React and deployed on Vercel,
          creating a complete full-stack architecture that
          integrates Machine Learning with modern web
          technologies.
        </p>

        <div className="architecture">
          <div className="arch-card">
            <h4>TMDB Dataset</h4>
          </div>

          <div className="arch-arrow">→</div>

          <div className="arch-card">
            <h4>Flask ML Service</h4>
          </div>

          <div className="arch-arrow">→</div>

          <div className="arch-card">
            <h4>Node.js Backend</h4>
          </div>

          <div className="arch-arrow">→</div>

          <div className="arch-card">
            <h4>React Frontend</h4>
          </div>
        </div>

        <div className="tech-stack">

          <div className="tech-item">
            <FaReact />
            <span>React</span>
          </div>

          <div className="tech-item">
            <FaNodeJs />
            <span>Node.js</span>
          </div>

          <div className="tech-item">
            <SiExpress />
            <span>Express</span>
          </div>

          <div className="tech-item">
            <FaPython />
            <span>Python</span>
          </div>

          <div className="tech-item">
            <SiFlask />
            <span>Flask</span>
          </div>

          <div className="tech-item">
            <SiRender />
            <span>Render</span>
          </div>

          <div className="tech-item">
            <SiVercel />
            <span>Vercel</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectInfo;