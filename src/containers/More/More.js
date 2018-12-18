import React, { Component } from "react";
import axios from "axios";
import { URL, key } from "../../axios"
import MoreOutput from "../../components/Main/More/MoreOutput";

class More extends Component {
  state = {
    id: this.props.match.params.id,
    data: null,
    video: null,
    cast: null,
    similar: null,
    dataLoaded: false
  }

  componentDidMount() {

    axios.all([
      axios.get(`${URL}movie/${this.state.id}?api_key=${key}&language=pl`),
      axios.get(`${URL}movie/${this.state.id}/videos?api_key=${key}`),
      axios.get(`${URL}movie/${this.state.id}/credits?api_key=${key}`),
      axios.get(`${URL}movie/${this.state.id}/similar?api_key=${key}`)
    ])
      .then(axios.spread((movie, trailer, cast, similar) => {
        // Both requests are now complete
        this.setState({
          id: this.props.match.params.id,
          data: movie.data,
          video: trailer.data,
          cast: cast.data.cast,
          similar: similar.data,
          dataLoaded: true
        })
      }))
      .catch(error => {
        console.log(error)
      });
  }

  componentDidUpdate() {

    console.log('UPDATE -> ID: ', this.props.match.params.id)
    if (this.state.id !== this.props.match.params.id) {
      axios.all([
        axios.get(`${URL}movie/${this.props.match.params.id}?api_key=${key}&language=pl`),
        axios.get(`${URL}movie/${this.props.match.params.id}/videos?api_key=${key}`),
        axios.get(`${URL}movie/${this.props.match.params.id}/credits?api_key=${key}`),
        axios.get(`${URL}movie/${this.props.match.params.id}/similar?api_key=${key}`)
      ])
        .then(axios.spread((movie, trailer, cast, similar) => {
          // Both requests are now complete
          this.setState({
            id: this.props.match.params.id,
            data: movie.data,
            video: trailer.data,
            cast: cast.data.cast,
            similar: similar.data,
            dataLoaded: true
          })
        }))
        .catch(error => {
          console.log(error)
        });
    }
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <MoreOutput
          loaded={this.state.dataLoaded}
          id={this.state.data.id}
          title={this.state.data.title}
          originalName={this.state.data.original_title}
          picture={this.state.data.backdrop_path}
          cover={this.state.data.poster_path}
          genres={this.state.data.genres}
          homepage={this.state.data.homepage}
          originalLanguage={this.state.data.original_language}
          description={this.state.data.overview}
          productionCountry={this.state.data.production_countries}
          releaseDate={this.state.data.release_date}
          status={this.state.data.status}
          voteAverage={this.state.data.vote_average}
          voteCount={this.state.data.vote_count}
          popularity={this.state.data.popularity}
          trailer={this.state.video.results}
          cast={this.state.cast}
          similar={this.state.similar.results}
        />
      )
    }
    else {
      return (
        <div className="loader-container">
          <div className="loader">Loading...</div>
        </div>
      )
    }
  }
}

export default More;