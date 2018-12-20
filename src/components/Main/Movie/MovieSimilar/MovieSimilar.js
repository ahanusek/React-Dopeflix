import React from "react";
import { Link } from "react-router-dom";
import "./movieSimilar.scss";

const MovieSimilar = ({ similar }) => {
  const similarMap = similar.map(item => {
    return (
      <div className="movie-similar-card" key={item.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title}
        />
        <div className="movie-similiar-card-info">
          <p className="movie-similar-title">{item.title}</p>
          <p>
            <i className="fas fa-star" /> {item.vote_average}
          </p>
          <button>
            <Link to={"/movie/" + item.id}>Zobacz więcej</Link>
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <p className="movie-section-info">
        <i className="fas fa-video" />
        Podobne filmy
      </p>
      <div className="movie-similar">{similarMap}</div>
    </>
  );
};

export default MovieSimilar;
