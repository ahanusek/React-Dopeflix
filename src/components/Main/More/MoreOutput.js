import React from "react";
import "./moreOutput.scss";

const More = (props) => {

  const categories = props.genres.map(item => {
    return <span key={item.name}>{item.name} </span>
  })

  const productionCountry = props.productionCountry.map(item => {
    return <span key={item.name}>{item.name} </span>
  })

  const trailer = props.trailer.map(item => {
    return (
      <iframe key={item.key} title="Trailer" width="500" height="360"
        src={`http://www.youtube.com/embed/${item.key}`}
        frameBorder="0" />
    )
  })

  return (
    <section className="more">
      <p className="more-section-info"><i className="fas fa-info"></i> Informacje ogólne..</p>
      <div className="more-container">

        <div className="more-info-content">
          <p className="more-title">{props.title}</p>
          <p>Kategoria: {categories}</p>
          <p>Produkcja: {productionCountry}</p>
          <p>Premiera: {props.releaseDate}</p>
          <p className="more-description">{props.description}</p>
          <div>
            <button><i class="far fa-list-alt"></i></button>
          </div>
        </div>

        <div className="more-cover">
          <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="Poster" />
        </div>
      </div>

      <p className="more-section-info"><i className="fas fa-film"></i> Trailery..</p>

      <div className="more-trailer">
        {trailer}
      </div>
    </section>
  )
}

export default More;