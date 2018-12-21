import React from "react";
import SeriesInformations from "./SeriesInformations/SeriesInformations";
import SeriesCast from "./SeriesCast/SeriesCast";
import SeriesTrailer from "./SeriesTrailer/SeriesTrailer";
import "./series.scss";

const SeriesOutput = props => {

  return (
    <>
      <section className="film_series-container">
        <SeriesInformations
          id={props.id}
          title={props.title}
          categories={props.genres}
          production_country={props.production_country}
          cover={props.cover}
          description={props.description}
          homepage={props.homepage}
          in_production={props.in_production}
          first_air_date={props.first_air_date}
          number_of_season={props.number_of_season}
          number_of_episodes={props.number_of_episodes}
          networks={props.networks}
          popularity={props.popularity}
          vote_average={props.vote_average}
          vote_count={props.vote_count}
          // seasonInformations={seasonInformations}
        />
        <SeriesCast cast={props.cast} />
        <SeriesTrailer />
      </section>
    </>
  )
};

export default SeriesOutput;