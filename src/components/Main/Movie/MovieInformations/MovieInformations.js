import React from "react";

const MovieInformations = ({title, description, categories, releaseDate, cover, productionCountry, homepage}) => {
  return (
    <>
      <p className="film_series-section-info">
        <i className="fas fa-info" /> Informacje ogólne
      </p>
      <div className="film_series-wrapper">
        <div className="film_series-info-content">
          <p className="film_series-title">{title}</p>
          <p className="film_series-text">Kategoria: <span>{categories}</span></p>
          <p className="film_series-text">Produkcja: <span>{productionCountry}</span></p>
          <p className="film_series-text">
            Premiera: <span>{releaseDate}</span>
          </p>
          <p className="film_series-description">{description}</p>
          
          <div>
            {/* <button className="button button-list">
              Dodaj do swojej listy
            </button> */}

            <button className="button button-watch">
              <a href={homepage} target="_blank" rel="noopener noreferrer">Oglądaj teraz!</a>
            </button>
          </div>
        </div>

        <div className="film_series-cover">
          <img src={`https://image.tmdb.org/t/p/w500${cover}`} alt="Poster" />
        </div>
      </div>
    </>
  );
};

export default MovieInformations;
