import React from "react";
import MovieInformations from "./MovieInformations/MovieInformations";
import MovieCast from "./MovieCast/MovieCast";
import MovieTrailer from "./MovieTrailer/MovieTrailer";
import MovieSimilar from "./MovieSimilar/MovieSimilar";
import "./moreOutput.scss";

const More = props => {
  return (
    <section className="more">
      <MovieInformations
        title={props.title}
        description={props.description}
        categories={props.genres}
        releaseDate={props.releaseDate}
        cover={props.cover}
        productionCountry={props.productionCountry}
      />
      <MovieCast cast={props.cast} />
      <MovieTrailer trailer={props.trailer} />
      <MovieSimilar similar={props.similar} />
    </section>
  );
};

export default More;
