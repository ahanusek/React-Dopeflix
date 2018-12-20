import React, { Component } from "react";
import axios, { key } from "../../axios";
import { Link } from "react-router-dom";

class MovieSearchContainer extends Component {
  state = {
    data: [],
    inputValue: null,
    dataLoaded: null
  };

  changeHandler = e => {
    this.setState({
      inputValue: e.target.value
    });

    axios
      .get(`search/movie?api_key=${key}&language=pl&query=${this.state.inputValue}`)
      .then(response => {
        console.log(response.data.results)
        this.setState({
          data: response.data.results,
          dataLoaded: true
        })
      })
      .catch(error => console.log(error));
  };
  render() {
    let MovieSearchOutput;
        
    if(this.state.dataLoaded){
      MovieSearchOutput = this.state.data.map(item => {
        return (
          <li className="movie-search-output" key={item.id}>
            <Link to={"/movie/" + item.id}>{item.original_title} <span>({item.release_date})</span></Link>
          </li>
        )
      })
    }

    return (
      <>
        <input
          className="movie-search-input"
          onChange={this.changeHandler}
          type="text"
          placeholder="Wpisz nazwe filmu"
        />
        <ul>
          {MovieSearchOutput}
        </ul>
      </>
    );
  }
}

export default MovieSearchContainer;
