import React from "react";
import { Route } from "react-router-dom";
import HomeScreen from "../../components/Main/HomeScreen/HomeScreen";
import Movie from "../../containers/Movie/Movie";
import MovieSearch from "./Search/MovieSearch";
import Series from "../../containers/Series/Series";
import SeriesSearch from "./Search/SeriesSearch";

const Main = () => {
  return (
    <main>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/movie-search/" component={MovieSearch} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/series-search/" component={SeriesSearch} />
      <Route path="/series/:id" component={Series} />
    </main>
  );
};

export default Main;
