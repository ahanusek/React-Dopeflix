import React from "react";
import image from "../../../logo.svg";
import SeriesSearchContainer from "../../../containers/SeriesSearch/SeriesSearch";

const SeriesSearch = () => {
  return (
    <section className="search">
      <img src={image} alt="test" />
      <h1>Wyszukaj swój serial</h1>
      <SeriesSearchContainer />
    </section>
  );
};

export default SeriesSearch;
