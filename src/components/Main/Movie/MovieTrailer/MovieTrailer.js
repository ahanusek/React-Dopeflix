import React from "react";

const MovieTrailer = ({ trailer }) => {
  let linkTrailer;
  if (trailer.length === 0) {
    linkTrailer = "http://www.youtube.com";
  } else {
    linkTrailer = `http://www.youtube.com/embed/${trailer[0].key}`;
  }
  return (
    <>
      <p className="film_series-section-info">
        <i className="fas fa-film" /> Trailer
      </p>
      <div className="film_series-trailer">
        <iframe
          title="Trailer"
          width="100%"
          height="500"
          src={linkTrailer}
          frameBorder="0"
        />
      </div>
    </>
  );
};

export default MovieTrailer;
