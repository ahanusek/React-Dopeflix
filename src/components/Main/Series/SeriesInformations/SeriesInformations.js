import React from "react";

const SeriesInformations = ({title, categories, production_country}) => {
  return (
    <>
      <h1>series informations</h1>
      {title}, {categories}, {production_country}
    </>
  )
};

export default SeriesInformations;