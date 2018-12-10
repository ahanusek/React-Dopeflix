import React, { Component } from 'react';
import { Input } from '../components/Search/Search-styles';
import axios from 'axios';

class SearchMovies extends Component {

  state = {
    data: [],
    getData: false
  }

  componentDidMount() {
    console.log('componentDidMount');

    const apiKey = 'a70dbfe19b800809dfdd3e89e8532c9e';
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/';

    axios.get(`tv?api_key=${apiKey}&query=Ozark`)
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

    if (this.state.getData === true) {
      const data = this.state.data.results.map(item => {
        console.log(item);
        return <p>{item}</p>
      });
    }

    return (
      <>
        <Input type="text" placeholder="podaj fraze" />
      </>
    )
  }
};

export default SearchMovies;