import React from "react";
import "./Actors.css";

const actors = [
  {
    id: 1,
    name: "Robert Downey Jr.",
    role: "Iron Man",
    rating: "9.8",
    image:
      "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
  },
  {
    id: 2,
    name: "Shah Rukh Khan",
    role: "Bollywood Superstar",
    rating: "9.8",
    image:
      "https://www.siasat.com/wp-content/uploads/2023/04/SRK.jpg",
  },
  {
    id: 3,
    name: "Chris Hemsworth",
    role: "Thor",
    rating: "9.5",
    image:
      "https://image.tmdb.org/t/p/w500/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
  },
  {
    id: 4,
    name: "Scarlett Johansson",
    role: "Black Widow",
    rating: "9.6",
    image:
      "https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
  },
  {
    id: 5,
    name: "Amitabh Bachchan",
    role: "Legendary Actor",
    rating: "9.7",
    image:
      "https://images.indianexpress.com/2026/04/Amitabh-Bachchan-1.jpg?w=1600",
  },
  {
    id: 6,
    name: "Tom Holland",
    role: "Spider-Man",
    rating: "9.3",
    image:
      "https://assets.telegraphindia.com/telegraph/2024/Oct/1729577399_tom-holland.jpg",
  },
  {
    id: 7,
    name: "Leonardo DiCaprio",
    role: "Hollywood Actor",
    rating: "9.7",
    image:
      "https://image.tmdb.org/t/p/w500/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg",
  },

  {
    id: 8,
    name: "Ranbir Kapoor",
    role: "Bollywood Actor",
    rating: "9.4",
    image:
      "https://media5.bollywoodhungama.in/wp-content/uploads/2026/07/620x450-124835011.jpg.jpeg",
  },

];


function Actors() {
  return (
    <section className="actors-section" id="actors">
      <div className="container">
        <h2 className="section-title">
          Popular Actors
        </h2>

        <p className="section-subtitle">
          Discover trending actors loved by audiences....
        </p>

        <div className="actors-grid">
          {actors.map((actor) => (
            <div
              className="actor-card"
              key={actor.id}
            >
              <div className="actor-image">
                <img
                  src={actor.image}
                  alt={actor.name}
                />

                <span className="actor-rating">
                  ⭐ {actor.rating}
                </span>
              </div>

              <h3>{actor.name}</h3>

              <p>{actor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Actors;