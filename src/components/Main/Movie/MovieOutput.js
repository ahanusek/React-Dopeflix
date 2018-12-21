import React from "react";
import MovieInformations from "./MovieInformations/MovieInformations";
import MovieCast from "./MovieCast/MovieCast";
import MovieTrailer from "./MovieTrailer/MovieTrailer";
import MovieSimilar from "./MovieSimilar/MovieSimilar";

const Movie = props => {
  return (
    <section className="film_series-container">
      <MovieInformations
        title={props.title}
        description={props.description}
        categories={props.genres}
        releaseDate={props.releaseDate}
        cover={props.cover}
        productionCountry={props.productionCountry}
        homepage={props.homepage}
      />
      <MovieCast cast={props.cast} />
      <MovieTrailer trailer={props.trailer} />
      <MovieSimilar similar={props.similar} />
    </section>
  );
};

export default Movie;
