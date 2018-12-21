import React from "react";

const MovieCast = ({ cast }) => {
  const caster = cast.map(item => {
    let link = item.profile_path;

    if (item.profile_path === null) {
      link = "https://i.imgur.com/UB2aBfj.png";
    } else {
      link = `https://image.tmdb.org/t/p/w500${item.profile_path}`;
    }

    return (
      <div className="film_series-cast-card" key={item.name}>
        <img src={link} alt="Caster" />
        <div className="film_series-cast-card-info">
          <p className="film_series-cast-card-info-character">{item.character}</p>
          <p className="film_series-cast-card-info-actor">{item.name}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <p className="film_series-section-info">
        <i className="fas fa-users" />
        Obsada
      </p>
      <div className="film_series-cast">{caster}</div>
    </>
  );
};

export default MovieCast;
