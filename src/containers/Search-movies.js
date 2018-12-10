import React, { Component } from 'react';
// import { Input } from '../components/Search/Search-styles';
import axios from 'axios';

class SearchMovies extends Component {

  state = {
    apiKey: 'a70dbfe19b800809dfdd3e89e8532c9e',
    data: [],
    inputValue: null,
    getData: false
  }

  changeHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

  sendHandler = (e) => {
    e.preventDefault();

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/';

    axios.get(`tv?api_key=${this.state.apiKey}&query=${this.state.inputValue}&language=pl`)
      .then(response => {
        console.log(response.data);

        this.setState({
          data: response.data,
          getData: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    let data;

    if (this.state.getData === true) {
      data = this.state.data.results.map(item => {
        return (
          <div key={item.id}>
            <p>Nazwa: {item.name}</p>
            <p>Opis: {item.overview}</p>
            <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt="Brak obrazka" />
            <hr />
          </div>
        )
      });
    }

    return (
      <>
        <form onSubmit={this.sendHandler}>
          <input type="text" onChange={this.changeHandler} />
          <input type="submit" />
        </form>
        {data}
      </>
    )
  }
};

export default SearchMovies;