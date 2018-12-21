import React from "react";
import image from "../../../logo.svg";
import MovieSearchContainer from "../../../containers/MovieSearch/MovieSearch";
import "./search.scss";

const MovieSearch = () => {
  return (
    <section className="search">
      <img src={image} alt="test" />
      <h1>Wyszukaj swój film</h1>
      <MovieSearchContainer />
    </section>
  )
};

export default MovieSearch;