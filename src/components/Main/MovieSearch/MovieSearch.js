import React from "react";
import image from "../../../logo.svg";
import MovieSearchContainer from "../../../containers/MovieSearch/MovieSearch";
import "./movieSearch.scss";

const MovieSearch = () => {
  return (
    <section className="movie-search">
      <img src={image} alt="test" />
      <h1>Wyszukaj swój film</h1>
      <MovieSearchContainer />
    </section>
  )
};

export default MovieSearch;