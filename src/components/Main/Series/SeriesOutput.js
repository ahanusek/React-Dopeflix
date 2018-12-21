import React from "react";
import SeriesInformations from "./SeriesInformations/SeriesInformations";

const SeriesOutput = props => {

  return (
    <>
      <section className="series">
        <SeriesInformations 
          title={props.title}
          categories={props.genres}
          production_country={props.production_country}
        />
      </section>
    </>
  )
};

export default SeriesOutput;