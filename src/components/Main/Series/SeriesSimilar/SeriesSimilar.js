import React from "react";
import { Link } from "react-router-dom";

const SeriesSimilar = ({ similar }) => {
  const similarMap = similar.map(item => {
    return (
      <div className="film_series-similar-card" key={item.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title}
        />
        <div className="film_series-similiar-card-info">
          <p className="film_series-similar-title">{item.name}</p>
          <p>
            <i className="fas fa-star" /> {item.vote_average}
            <span> - Ocena TMDB</span>
          </p>
          <button>
            <Link to={"/series/" + item.id}>Zobacz więcej</Link>
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      <p className="film_series-section-info">
        <i className="fas fa-video" />
        Podobne Seriale
      </p>
      <div className="film_series-similar">{similarMap}</div>
    </>
  );
};

export default SeriesSimilar;
