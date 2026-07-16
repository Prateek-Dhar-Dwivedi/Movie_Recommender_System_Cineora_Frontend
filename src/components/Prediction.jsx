import React from "react";
import "./Prediction.css";

function Prediction() {
  return (
    <section className="prediction-section" id="prediction">
      <div className="container">

        <h2 className="section-title">AI Movie Prediction</h2>

        <p className="section-subtitle">
          Machine learning powered movie analysis
        </p>

        <div className="prediction-container">

          <div className="prediction-left">

            <img
              src="https://image.tmdb.org/t/p/w780/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
              alt="Inception"
            />

            <div className="prediction-score">
              <h3>AI Predicted Score</h3>
              <h1>94%</h1>
              <p>Inception (2010)</p>
            </div>

          </div>

          <div className="prediction-right">

            <div className="metric-card">
              <div className="metric-header">
                <span>Story Quality</span>
                <span>96%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"96%"}}></div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span>Visual Effects</span>
                <span>93%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"93%"}}></div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span>Acting Performance</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"95%"}}></div>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <span>User Interest</span>
                <span>97%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width:"97%"}}></div>
              </div>
            </div>

            <div className="analytics-grid">

              <div className="analytics-card">
                <h3>8.8</h3>
                <p>IMDb Score</p>
              </div>

              <div className="analytics-card">
                <h3>2.6M</h3>
                <p>Reviews</p>
              </div>

              <div className="analytics-card">
                <h3>Top 5</h3>
                <p>Global Rank</p>
              </div>

              <div className="analytics-card">
                <h3>95%</h3>
                <p>Recommendation</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Prediction;