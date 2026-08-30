import { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";
import { FaSearch, FaSpinner } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const API_BASE_URL = process.env.REACT_APP_API_URL || "https://movie-recommender-system-4-nn5m.onrender.com";

const QUICK_SUGGESTIONS = ["Avatar", "Inception", "The Dark Knight", "Interstellar", "The Avengers", "Titanic"];

function Hero() {
  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchedMovie, setSearchedMovie] = useState("");
  const [movieSuggestions, setMovieSuggestions] = useState([]);

  useEffect(() => {
    // Optionally fetch available movie titles for autocomplete datalist
    axios
      .get(`${API_BASE_URL}/api/movies`, { timeout: 15000 })
      .then((res) => {
        if (Array.isArray(res.data)) {
          setMovieSuggestions(res.data.slice(0, 500));
        }
      })
      .catch(() => {
        // Fallback gracefully if endpoint is not loaded yet
      });
  }, []);

  const handleRecommend = async (searchQuery) => {
    const targetMovie = (typeof searchQuery === "string" ? searchQuery : movie).trim();
    if (!targetMovie) return;

    if (typeof searchQuery === "string") {
      setMovie(searchQuery);
    }

    setLoading(true);
    setErrorMsg("");
    setRecommendations([]);
    setSearchedMovie(targetMovie);

    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/recommend/${encodeURIComponent(targetMovie)}`,
        { timeout: 70000 }
      );

      if (res.data && Array.isArray(res.data)) {
        setRecommendations(res.data);
      } else if (res.data && res.data.error) {
        setErrorMsg(res.data.error);
      } else {
        setErrorMsg("No recommendations found for this title.");
      }
    } catch (error) {
      console.error("Search error:", error);
      const serverError = error.response?.data?.error;
      if (serverError) {
        setErrorMsg(serverError);
      } else if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
        setErrorMsg("Server is waking up from sleep. Please wait a moment and try again!");
      } else {
        setErrorMsg("Could not find movie or server is starting up. Please try again!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <span className="project-badge">
          🎬 Intelligent Movie Discovery
        </span>

        <h1 className="hero-title">
          Welcome to
          <br />
          <TypeAnimation
            sequence={[
              "Cineora!",
              2000,
              "Movie Discovery",
              2000,
              "Smart Recommendations",
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>

        <p>
          Explore thousands of movies and TV shows.
          Get personalized recommendations powered by
          machine learning and discover your next favorite
          watch instantly.
        </p>

        <div className="hero-search-wrapper">
          <div className="hero-search">
            <input
              type="text"
              list="movie-datalist"
              placeholder="Enter movie name (e.g. Inception, Avatar)..."
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleRecommend();
                }
              }}
              disabled={loading}
            />

            <datalist id="movie-datalist">
              {movieSuggestions.map((title, idx) => (
                <option key={idx} value={title} />
              ))}
            </datalist>

            <button
              onClick={() => handleRecommend()}
              disabled={loading || !movie.trim()}
              aria-label="Search"
            >
              {loading ? <FaSpinner className="spinner-icon" /> : <FaSearch />}
            </button>
          </div>

          <div className="quick-suggestions">
            <span>Try:</span>
            {QUICK_SUGGESTIONS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className="suggestion-pill"
                onClick={() => handleRecommend(item)}
                disabled={loading}
              >
                {item}
              </button>
            ))}
          </div>

          {loading && (
            <div className="search-status loading-status">
              <FaSpinner className="spinner-icon" />
              <span>Finding best recommendations (free-tier servers may take a few seconds to warm up)...</span>
            </div>
          )}

          {errorMsg && !loading && (
            <div className="search-status error-status">
              ⚠️ {errorMsg}
            </div>
          )}
        </div>

        <div className="stats">
          <div className="stat-card">
            <h2>5000+</h2>
            <p>Movies</p>
          </div>

          <div className="stat-card">
            <h2>TMDB</h2>
            <p>Dataset</p>
          </div>

          <div className="stat-card">
            <h2>ML</h2>
            <p>Powered</p>
          </div>
        </div>
        
        {/* Recommendations Display */}
        {recommendations.length > 0 && (
          <div className="recommendations-container">
            <h3 className="rec-heading">
              Recommendations for <span>"{searchedMovie}"</span>:
            </h3>
            <div className="movies">
              {recommendations.map((item, index) => (
                <div
                  className="card"
                  key={index}
                  onClick={() => handleRecommend(item)}
                  title={`Click to get recommendations for ${item}`}
                >
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="hero-right">
        <div className="floating-card card1">
          <img
            src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            alt="movie"
          />
          <div className="card-info">
            <h4>Interstellar</h4>
            <span>⭐ 8.9</span>
          </div>
        </div>

        <div className="floating-card card2">
          <img
            src="https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
            alt="movie"
          />
          <div className="card-info">
            <h4>Inception</h4>
            <span>⭐ 8.8</span>
          </div>
        </div>

        <div className="hero-circle"></div>
      </div>
    </section>
  );
}

export default Hero;