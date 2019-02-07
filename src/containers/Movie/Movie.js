import React, { Component } from "react";
import MovieOutput from "../../components/Main/Movie/MovieOutput";
import Loader from "../../components/Loader/Loader";
import { connect } from "react-redux";
import { fetchMovie } from "../../store/actions/movieAction";
import ErrorInformations from "../../components/Main/ErrorInformations/ErrorInformations";

class Movie extends Component {
  state = {
    id: this.props.match.params.id
  };

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevState.id) {
      console.log("update component");
      this.props.fetchMovie(this.props.match.params.id);
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
      const { movie, cast, trailer, similar } = this.props;
      const categories = movie.genres.map(item => item.name);
      const productionCountry = movie.production_countries.map(
        item => item.name
      );
      return (
        <MovieOutput
          title={movie.title}
          genres={categories}
          productionCountry={productionCountry}
          releaseDate={movie.release_date}
          description={movie.overview}
          cover={movie.poster_path}
          picture={movie.backdrop_path}
          cast={cast}
          trailer={trailer.results}
          similar={similar.results}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movieReducer.movie,
    cast: state.movieReducer.cast,
    trailer: state.movieReducer.trailer,
    similar: state.movieReducer.similar,
    loading: state.movieReducer.loading,
    error: state.movieReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchMovie }
)(Movie);
