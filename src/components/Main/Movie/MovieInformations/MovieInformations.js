import React from "react";
import "./movieInformations.scss";

const MovieInformations = ({title, description, categories, releaseDate, cover, productionCountry}) => {
  return (
    <>
      <p className="movie-section-info">
        <i className="fas fa-info" /> Informacje ogólne
      </p>
      <div className="movie-movie">
        <div className="movie-info-content">
          <p className="movie-title">{title}</p>
          <p className="movie-text">Kategoria: <span>{categories}</span></p>
          <p className="movie-text">Produkcja: <span>{productionCountry}</span></p>
          <p className="movie-text">
            Premiera: <span>{releaseDate}</span>
          </p>
          <p className="movie-description">{description}</p>
        </div>

        <div className="movie-cover">
          <img src={`https://image.tmdb.org/t/p/w500${cover}`} alt="Poster" />
        </div>
      </div>
    </>
  );
};

export default MovieInformations;
