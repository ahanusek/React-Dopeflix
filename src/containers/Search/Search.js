import React, { Component } from 'react';
import axios from 'axios';

import SearchOutput from "../../components/Header/Navbar/Search-output";

class Search extends Component {

  state = {
    data: [],
    inputValue: null,
    getData: false
  }

  sendHandler = (e) => {
    e.preventDefault();
    console.log("Zapytanie:")
    const apiKey = "a70dbfe19b800809dfdd3e89e8532c9e";
    axios.defaults.baseURL = "https://api.themoviedb.org/3/search/";

    axios
      .get(`multi?api_key=${apiKey}&language=pl&query=${this.state.inputValue}`)
      .then(response => {
        console.log(response.data.results);
        this.setState({
          data: response.data,
          getData: true
        });
      })
      .catch(error => {
        console.log(error);
      });


    if (this.state.inputValue === "") {
      this.setState({
        inputValue: "adadadadad", //???
      })
    }
  }

  changeHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    let searchOutput;
    if (this.state.getData) {
      searchOutput = this.state.data.results.map(item => {
        return (
          <SearchOutput
            key={item.id}
            id={item.id}
            name={item.name}
            title={item.title}
          />
        );
      });
    }

    return (
      <>
        <form onSubmit={this.sendHandler}>

          <input
            className="nav-search"
            type="text"
            placeholder="Search"
            onChange={this.changeHandler} />
          {searchOutput}

        </form>
      </>
    )
  }
}

export default Search;