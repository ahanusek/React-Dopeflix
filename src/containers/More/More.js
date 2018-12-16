import React, { Component } from "react";
import axios from "axios";
import MoreOutput from "../../components/Main/More/MoreOutput";

class More extends Component {
  state = {
    id: this.props.match.params.id,
    data: null,
    dataLoaded: false
  }

  componentDidMount() {
    const apiKey = "a70dbfe19b800809dfdd3e89e8532c9e";
    axios.get(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${apiKey}&language=pl`)
      .then(response => {
        this.setState({
          data: response.data,
          dataLoaded: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidUpdate() {
    if (this.state.id !== this.props.match.params.id) {
      const apiKey = "a70dbfe19b800809dfdd3e89e8532c9e";
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${apiKey}&language=pl`)
        .then(response => {
          this.setState({
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
          releaseData={this.state.data.release_date}
          status={this.state.data.release}
          voteAverage={this.state.data.vote_average}
          voteCount={this.state.data.vote_count}
          popularity={this.state.data.popularity}
        />
      )
    }
    else {
      return (
        <div className="loader-container">
          <div class="loader">Loading...</div>
        </div>
      )
    }


  }
}

export default More;