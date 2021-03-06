import React, { Component } from "react";
import axios from "axios";
import { URL, key } from "../../axios";
import Loader from "../../components/Loader/Loader";
import SeriesOutput from "../../components/Main/Series/SeriesOutput";

class Series extends Component {
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
        axios.get(`${URL}tv/${this.state.id}?api_key=${key}&language=pl`),
        axios.get(`${URL}tv/${this.state.id}/credits?api_key=${key}`),
        axios.get(`${URL}tv/${this.state.id}/videos?api_key=${key}`),
        axios.get(`${URL}tv/${this.state.id}/similar?api_key=${key}`)
      ])
      .then(
        axios.spread((series, cast, trailer, similar) => {
          // Both requests are now complete
          this.setState({
            id: this.props.match.params.id,
            data: series.data,
            video: trailer.data,
            cast: cast.data.cast,
            similar: similar.data,
            dataLoaded: true
          });
        })
      )
      .catch(error => console.log(error));
  }

  componentDidUpdate() {
    console.log("Update Series -> ID ->", this.props.match.params.id);
    if (this.state.id !== this.props.match.params.id) {
      axios
        .all([
          axios.get(`${URL}tv/${this.props.match.params.id}?api_key=${key}&language=pl`),
          axios.get(`${URL}tv/${this.props.match.params.id}/credits?api_key=${key}`),
          axios.get(`${URL}tv/${this.props.match.params.id}/videos?api_key=${key}`),
          axios.get(`${URL}tv/${this.props.match.params.id}/similar?api_key=${key}`)
        ])
        .then(
          axios.spread((series, cast, trailer, similar) => {
            this.setState({
              id: this.props.match.params.id,
              data: series.data,
              video: trailer.data,
              cast: cast.data.cast,
              similar: similar.data,
              dataLoaded: true
            })
          })
        )
        .catch(error => console.log(error))
      window.scrollTo(0, 0);
    }
  }

  render() {
    if (this.state.dataLoaded) {

      //for categories
      const categories = this.state.data.genres.map(item => item.name);
      
      //production country
      const productionCountry = this.state.data.origin_country.map(item => item);

      //networks
      const networks = this.state.data.networks.map(item => item.name);

      //season informations
      const seasonInformations = this.state.data.seasons.map(item => item)

      
      return (
        <SeriesOutput
          id={this.state.data.id}
          title={this.state.data.name}
          genres={categories}
          production_country={productionCountry}
          cover={this.state.data.poster_path}
          description={this.state.data.overview}
          homepage={this.state.data.homepage}
          in_production={this.state.data.in_production}
          first_air_date={this.state.data.first_air_date}
          number_of_season={this.state.data.number_of_seasons}
          number_of_episodes={this.state.data.number_of_episodes}
          networks={networks}
          popularity={this.state.data.popularity}
          seasonInformations={seasonInformations}
          vote_average={this.state.data.vote_average}
          vote_count={this.state.data.vote_count}
          background={this.state.backdrop_path}
          cast={this.state.cast}
          trailer={this.state.video.results}
          similar={this.state.similar.results}
        />
      )
    } else {
      return <Loader />
    }
  }
}

export default Series;
