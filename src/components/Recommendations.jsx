import React, { useState } from "react";
import "./Recommendations.css";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    rating: "8.7",
    genre: "Sci-Fi, Drama",
    year: "2014",
    description:
      "A group of astronauts travels through a wormhole near Saturn to search for a new planet that can save humanity from extinction.",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },

  {
    id: 2,
    title: "Inception",
    rating: "8.8",
    genre: "Action, Thriller",
    year: "2010",
    description:
      "A skilled extractor who steals secrets from dreams is offered a chance to erase his past by planting an idea inside someone's mind.",
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },

  {
    id: 3,
    title: "The Batman",
    rating: "7.8",
    genre: "Crime, Mystery",
    year: "2022",
    description:
      "Batman investigates a series of mysterious crimes in Gotham City while uncovering corruption and facing the Riddler.",
    image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },

  {
    id: 4,
    title: "Oppenheimer",
    rating: "8.6",
    genre: "Drama, History",
    year: "2023",
    description:
      "The story of J. Robert Oppenheimer and his role in developing the first atomic bomb during the Manhattan Project.",
    image:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },

  {
    id: 5,
    title: "Avatar",
    rating: "7.9",
    genre: "Fantasy, Adventure",
    year: "2009",
    description:
      "A former marine enters the world of Pandora and must decide between following orders and protecting its inhabitants.",
    image:
      "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
  },

  {
    id: 6,
    title: "Joker",
    rating: "8.1",
    genre: "Drama, Crime",
    year: "2019",
    description:
      "A struggling comedian facing isolation and rejection transforms into Gotham City's infamous criminal figure.",
    image:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
];


function MovieCard({ movie }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className={`movie-card ${flipped ? "flipped" : ""}`}
      onClick={toggleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFlip();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`${movie.title}, Rating ${movie.rating}, Genre ${movie.genre}. Click or tap to ${flipped ? "view poster" : "read synopsis"}`}
    >
      <div className="movie-inner">
        {/* FRONT */}
        <div className="movie-front">
          <div className="movie-image">
            <img
              src={movie.image}
              alt={movie.title}
              loading="lazy"
            />
            <div className="flip-hint">
              <span>Tap to flip</span>
            </div>
          </div>

          <div className="movie-content">
            <h3>{movie.title}</h3>
            <div className="movie-meta">
              <span className="genre-badge">{movie.genre}</span>
              <span className="rating">⭐ {movie.rating}</span>
            </div>
            <p className="movie-year">📅 {movie.year}</p>
          </div>
        </div>

        {/* BACK */}
        <div className="movie-back">
          <h3>{movie.title}</h3>
          <p className="movie-synopsis">{movie.description}</p>
          <div className="back-meta">
            <span>🎭 {movie.genre}</span>
            <span>📅 {movie.year}</span>
            <span className="rating-badge">⭐ {movie.rating} / 10</span>
          </div>
          <div className="flip-hint-back">
            <span>Tap to return</span>
          </div>
        </div>
      </div>
    </div>
  );
}



function Recommendations() {

  return (

    <section
      className="recommendations"
      id="recommendations"
    >

      <div className="container">


        <h2 className="section-title">
          Recommended Movies
        </h2>


        <p className="section-subtitle">
          Curated recommendations powered by AI
        </p>



        <div className="movie-grid">


          {
            movies.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))
          }


        </div>


      </div>


    </section>

  );
}


export default Recommendations;