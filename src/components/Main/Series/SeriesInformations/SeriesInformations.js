import React from "react";

// prettier-ignore
const SeriesInformations = (props) => {
  return (
    <>
      <p className="film_series-section-info">
        <i className="fas fa-info" /> Informacje ogólne
      </p>
      <div className="film_series-wrapper">
        <div className="film_series-content">
          <p className="film_series-title">{props.title}</p>
          <p className="film_series-text">Kategoria: <span>{props.categories}</span></p>
          <p className="film_series-text">Produkcja: <span>{props.production_country}</span></p>
          <p className="film_series-text">Premiera pierwszego odcinka: <span>{props.first_air_date}</span></p>
          <p className="film_series-text">Ilość sezonów: <span>{props.number_of_season}</span></p>
          <p className="film_series-text">Ilość odcinków: <span>{props.number_of_episodes}</span></p>
          <p className="film_series-text">Platforma: <span>{props.networks}</span></p>
          <p className="film_series-description">{props.description}</p>
          <div>
            <button className="button button-watch">
              <a href={props.homepage} target="_blank" rel="noopener noreferrer">Oglądaj teraz!</a>
            </button>
          </div>
        </div>
        <div className="film_series-cover">
          <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="Poster" />
        </div>
      </div>
    </>
  )
};

export default SeriesInformations;
