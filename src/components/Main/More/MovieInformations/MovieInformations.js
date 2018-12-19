import React from "react";
import "./movieInformations.scss";

const MovieInformations = ({title, description, categories, releaseDate, cover, productionCountry}) => {
  return (
    <>
      <p className="more-section-info">
        <i className="fas fa-info" /> Informacje ogólne
      </p>
      <div className="more-movie">
        <div className="more-info-content">
          <p className="more-title">{title}</p>
          <p className="more-text">Kategoria: <span>{categories}</span></p>
          <p className="more-text">Produkcja: <span>{productionCountry}</span></p>
          <p className="more-text">
            Premiera: <span>{releaseDate}</span>
          </p>
          <p className="more-description">{description}</p>
        </div>

        <div className="more-cover">
          <img src={`https://image.tmdb.org/t/p/w500${cover}`} alt="Poster" />
        </div>
      </div>
    </>
  );
};

export default MovieInformations;
