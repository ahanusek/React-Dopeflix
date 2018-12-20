import React from "react";
import { Route } from "react-router-dom";
import HomeScreen from "../../components/Main/HomeScreen/HomeScreen";
import Movie from "../../containers/Movie/Movie";
import MovieSearch from "../Main/MovieSearch/MovieSearch";

const Main = () => {
  return (
    <main>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/movie-search/" component={MovieSearch} />
      <Route path="/movie/:id" component={Movie} />
    </main>
  );
};

export default Main;
