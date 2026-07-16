import { useState } from "react";
import axios from "axios";
import "./Hero.css";
import { FaSearch } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {

  const [movie, setMovie] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = async () => {
    if (!movie.trim()) return;

    try {
      const res = await axios.get(
        `https://movie-recommender-system-4-nn5m.onrender.com/api/recommend/${encodeURIComponent(movie)}`
      );

      console.log(res.data);

      if (res.data.error) {
        alert("No movies available");
        setRecommendations([]);
        return;
      }

      setRecommendations(res.data);

    } catch (error) {
      console.log(error.response?.data);

      alert("No movies available");
      setRecommendations([]);
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


        <div className="hero-search">

          <input
            type="text"
            placeholder="Enter movie name..."
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          />


          <button onClick={handleRecommend}>
            <FaSearch />
          </button>

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

        <div className="movies">

          {recommendations.map((item, index) => (

            <div className="card" key={index}>
              <h3>{item}</h3>
            </div>

          ))}

        </div>


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