import React, { Component } from "react";
import axios from "axios";


const MovieComponent = ({ movieName }) => {
  return <p>{movieName}</p>
}

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
        console.log(response);
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
    }, 300);
  }

  render() {
    const { data, index, loaded } = this.state;

    return loaded ? <MovieComponent movieName={data[index].title} /> : null;
  }
}



export default Trending;
