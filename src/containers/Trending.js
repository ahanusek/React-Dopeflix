import React, { Component } from "react";
import axios from "axios";
import TrendingAll from "../components/Trending/Trending-All";

class Trending extends Component {
  state = {
    data: [],
    loaded: false,
    index: 0,
  };

  componentDidMount() {
    console.log("Component Mount");
    const apiKey = "a70dbfe19b800809dfdd3e89e8532c9e";
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=pl`)
      .then(response => {
        console.log(response.data.results);
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
        })
      }
    }, 10000);
  }

  render() {
    const { data, index, loaded } = this.state;
    return loaded ?
      <TrendingAll
        movieName={data[index].title}
        image={data[index].poster_path}
        description={data[index].overview}
        ratingCount={data[index].vote_count}
        rating={data[index].vote_average}
        picture={data[index].backdrop_path}
        releaseDate={data[index].release_date}
        id={data[index].id}
      />
      : null;
  }
}

export default Trending;
