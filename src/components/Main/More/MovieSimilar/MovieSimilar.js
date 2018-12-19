import React from "react";
import { Link } from "react-router-dom";
import "./movieSimilar.scss";

const MovieSimilar = ({ similar }) => {
  const similarMap = similar.map(item => {
    return (
      <div className="more-similar-card" key={item.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title}
        />
        <div className="more-similiar-card-info">
          <p className="more-similar-title">{item.title}</p>
          <p>
            <i className="fas fa-star" /> {item.vote_average}
          </p>
          <button>
            <Link to={"/more/" + item.id}>Zobacz więcej</Link>
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <p className="more-section-info">
        <i className="fas fa-video" />
        Podobne filmy
      </p>
      <div className="more-similar">{similarMap}</div>
    </>
  );
};

export default MovieSimilar;
