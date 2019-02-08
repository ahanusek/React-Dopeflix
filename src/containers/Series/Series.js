import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import SeriesOutput from "../../components/Main/Series/SeriesOutput";
import { connect } from "react-redux";
import { fetchSeries } from "../../store/actions/seriesAction";
import ErrorInformations from "../../components/Main/ErrorInformations/ErrorInformations";

class Series extends Component {
  state = {
    id: this.props.match.params.id
  };

  componentDidMount() {
    this.props.fetchSeries(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevState.id) {
      console.log("update component");
      this.props.fetchSeries(this.props.match.params.id);
      this.setState({ id: this.props.match.params.id });
      window.scrollTo(0, 0);
    }
  }

  render() {
    if (this.props.error) {
      const status = this.props.error.response.status;
      const msg = this.props.error.response.statusText;
      return <ErrorInformations status={status} msg={msg} />;
    }

    if (this.props.loading) {
      return <Loader />;
    } else {
      const { series, cast, trailer, similar } = this.props;
      const categories = series.genres.map(item => item.name);
      const productionCountry = series.origin_country.map(item => item);
      const networks = series.networks.map(item => item.name);
      const seasonInformations = series.seasons.map(item => item);

      return (
        <SeriesOutput
          title={series.name}
          genres={categories}
          production_country={productionCountry}
          cover={series.poster_path}
          description={series.overview}
          homepage={series.homepage}
          in_production={series.in_production}
          first_air_date={series.first_air_date}
          number_of_season={series.number_of_season}
          number_of_episodes={series.number_of_episodes}
          networks={networks}
          popularity={series.popularity}
          seasonInformations={seasonInformations}
          vote_average={series.vote_average}
          vote_count={series.vote_count}
          background={series.backdrop_path}
          cast={cast}
          trailer={trailer.results}
          similar={similar.results}
          id={this.props.match.params.id}
          type="series"
          UID="123456" // add here props with UID from firebase
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    series: state.seriesReducer.series,
    cast: state.seriesReducer.cast,
    trailer: state.seriesReducer.trailer,
    similar: state.seriesReducer.similar,
    loading: state.seriesReducer.loading,
    error: state.seriesReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSeries }
)(Series);
