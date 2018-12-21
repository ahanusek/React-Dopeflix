import React, { Component } from "react";
import axios from "axios";
import { URL, key } from "../../axios";
import MovieOutput from "../../components/Main/Movie/MovieOutput";
import Loader from "../../components/Loader/Loader";

class Movie extends Component {
  state = {
    id: this.props.match.params.id,
    data: null,
    video: null,
    cast: null,
    similar: null,
    dataLoaded: false
  };

  componentDidMount() {
    axios
      .all([
        axios.get(`${URL}movie/${this.state.id}?api_key=${key}&language=pl`),
        axios.get(`${URL}movie/${this.state.id}/videos?api_key=${key}`),
        axios.get(`${URL}movie/${this.state.id}/credits?api_key=${key}`),
        axios.get(`${URL}movie/${this.state.id}/similar?api_key=${key}`)
      ])
      .then(
        axios.spread((movie, trailer, cast, similar) => {
          // Both requests are now complete
          this.setState({
            id: this.props.match.params.id,
            data: movie.data,
            video: trailer.data,
            cast: cast.data.cast,
            similar: similar.data,
            dataLoaded: true
          });
        })
      )
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    console.log("UPDATE -> ID: ", this.props.match.params.id);
    if (this.state.id !== this.props.match.params.id) {
      axios
        .all([
          axios.get(`${URL}movie/${this.props.match.params.id}?api_key=${key}&language=pl`),
          axios.get(`${URL}movie/${this.props.match.params.id}/videos?api_key=${key}`),
          axios.get(`${URL}movie/${this.props.match.params.id}/credits?api_key=${key}`),
          axios.get(`${URL}movie/${this.props.match.params.id}/similar?api_key=${key}`)])
        .then(
          axios.spread((movie, trailer, cast, similar) => {
            // Both requests are now complete
            this.setState({
              id: this.props.match.params.id,
              data: movie.data,
              video: trailer.data,
              cast: cast.data.cast,
              similar: similar.data,
              dataLoaded: true
            });
          })
        )
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    if (this.state.dataLoaded) {
      //for movie
      const categories = this.state.data.genres.map(item => {
        return item.name;
      });

      const productionCountry = this.state.data.production_countries.map(
        item => {
          return item.name;
        }
      );

      return (
        <MovieOutput
          //for MovieInformations component
          title={this.state.data.title}
          genres={categories}
          productionCountry={productionCountry}
          releaseDate={this.state.data.release_date}
          description={this.state.data.overview}
          cover={this.state.data.poster_path}
          picture={this.state.data.backdrop_path}
          //for MovieCast comopnent
          cast={this.state.cast}
          //for Trailer component
          trailer={this.state.video.results}
          //for similar component
          similar={this.state.similar.results}
          //other
          loaded={this.state.dataLoaded}
          id={this.state.data.id}
          originalName={this.state.data.original_title}
          homepage={this.state.data.homepage}
          originalLanguage={this.state.data.original_language}
          status={this.state.data.status}
          voteAverage={this.state.data.vote_average}
          voteCount={this.state.data.vote_count}
          popularity={this.state.data.popularity}
        />
      );
    } else {
      return <Loader />;
    }
  }
}

export default Movie;
