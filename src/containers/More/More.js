import React, { Component } from "react";
import axios, { key } from "../../axios";
import MoreOutput from "../../components/Main/More/MoreOutput";

class More extends Component {
  state = {
    id: this.props.match.params.id,
    data: null,
    dataLoaded: false
  }

  componentDidMount() {
    axios.get(`movie/${this.state.id}?api_key=${key}&language=pl`)
      .then(response => {
        this.setState({
          id: this.props.match.params.id,
          data: response.data,
          dataLoaded: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidUpdate() {
    console.log('update', this.props.match.params.id)
    if (this.state.id !== this.props.match.params.id) {
      axios.get(`movie/${this.props.match.params.id}?api_key=${key}&language=pl`)
        .then(response => {
          this.setState({
            id: this.props.match.params.id,
            data: response.data,
            dataLoaded: true
          })
        })
        .catch(error => {
          console.log(error.code);
        })
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