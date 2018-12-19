import React, { Component } from "react";
import axios, { key } from "../../axios";
import TrendingOutput from "../../components/Main/TrendingOutput/TrendingOutput";
import Loader from "../../components/Loader/Loader";

class Trending extends Component {
  state = {
    data: [],
    loaded: false,
    index: 0
  };

  componentDidMount() {
    axios
      .get(`trending/all/week?api_key=${key}&language=pl`)
      .then(response => {
        this.setState({
          data: response.data.results,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });

    setInterval(() => {
      if (this.state.index < this.state.data.length - 1) {
        this.setState({
          index: this.state.index + 1
        });
      } else {
        this.setState({
          index: 0
        });
      }
    }, 5000);
  }

  render() {
    const { data, index, loaded } = this.state;
    return loaded ? (
      <TrendingOutput
        movieName={data[index].original_title}
        image={data[index].poster_path}
        description={data[index].overview}
        ratingCount={data[index].vote_count}
        rating={data[index].vote_average}
        picture={data[index].backdrop_path}
        releaseDate={data[index].release_date}
        id={data[index].id}
      />
    ) : (
      <Loader />
    );
  }
}

export default Trending;
