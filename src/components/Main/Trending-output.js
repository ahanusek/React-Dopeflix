import React from "react";
import "./main.scss"

const TrendingOutput = (props) => {

  return (
    <div className="trending"
      style={{
        // eslint-disable-next-line
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/original${props.picture}` + ")"
      }}>

      <div className="trending-bg">
        <div className="trending-container">
          <p className="movie-title">{props.movieName}</p>
          <p className="movie-description">{props.description}</p>
          <p className="movie-text">Premiera: <span>{props.releaseDate}</span></p>
          <p className="movie-text">Liczba głosów: <span>{props.ratingCount}</span></p>
          <p className="movie-text">Średnia: <span>{props.rating}</span></p>
          <div className="trending-button">
            <button className="button">Zobacz więcej</button>
            <button className="button button-list">Dodaj do listy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingOutput;