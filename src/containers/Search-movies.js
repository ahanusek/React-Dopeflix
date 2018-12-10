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

  componentDidMount() {
    console.log('componentDidMount');

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/';

    axios.get(`tv?api_key=${this.state.apiKey}&query=${this.state.inputValue}`)
      .then(response => {
        // console.log(response.data)
        this.setState({
          data: response.data,
          getData: true
        })
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    let data;

    if (this.state.getData === true) {
      data = this.state.data.results.map(item => {
        console.log(item);
        return <p key={item.id}>{item.name}</p>
      });
    }

    return (
      <>
        <input type="text" onChange={this.changeHandler} />
        {data}
      </>
    )
  }
};

export default SearchMovies;