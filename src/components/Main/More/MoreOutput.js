import React from "react";
import "./moreOutput.scss";

const More = (props) => {

  const categories = props.genres.map(item => {
    return <span key={item.name}>{item.name} </span>
  })

  const productionCountry = props.productionCountry.map(item => {
    return <span key={item.name}>{item.name} </span>
  })

  let linkTrailer;
  if (props.trailer.key === undefined || null) {
    linkTrailer = 'http://www.youtube.com';
  }
  else {
    linkTrailer = `http://www.youtube.com/embed/${props.trailer[0].key}`;
  }

  const cast = props.cast.map(item => {
    let link = item.profile_path;

    if (item.profile_path === null) {
      link = "https://i.imgur.com/UB2aBfj.png"
    }
    else {
      link = `https://image.tmdb.org/t/p/w500${item.profile_path}`;
    }

    return (
      <div className="more-cast-card" key={item.name}>
        <img src={link} alt="Caster" />
        <div className="more-cast-card-info">
          <p className="more-cast-card-info-character">{item.character}</p>
          <p className="more-cast-card-info-actor">{item.name}</p>
        </div>
      </div>
    )
  })

  return (
    <section className="more">
      <p className="more-section-info"><i className="fas fa-info"></i> Informacje ogólne..</p>
      <div className="more-container">

        <div className="more-info-content">
          <p className="more-title">{props.title}</p>
          <p className="more-text">Kategoria: {categories}</p>
          <p className="more-text">Produkcja: {productionCountry}</p>
          <p className="more-text">Premiera: <span>{props.releaseDate}</span></p>
          <p className="more-description">{props.description}</p>
        </div>

        <div className="more-cover">
          <img src={`https://image.tmdb.org/t/p/w500${props.cover}`} alt="Poster" />
        </div>
      </div>

      <p className="more-section-info"><i className="fas fa-users"></i>Obsada..</p>
      <div className="more-cast">
        {cast}
      </div>

      <p className="more-section-info"><i className="fas fa-film"></i> Trailer..</p>
      <div className="more-trailer">
        <iframe title="Trailer" width="100%" height="500"
          src={linkTrailer}
          frameBorder="0" />
      </div>
    </section>
  )
}

export default More;
