import React, { Component } from 'react';
import axios from 'axios';
import SearchOutput from "../../components/Header/Navbar/SearchOutput/SearchOutput";

class Search extends Component {

  state = {
    data: [],
    inputValue: null,
    getData: false
  }

  sendHandler = (e) => {
    e.preventDefault();
  }

  changeHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    })

    console.log("Zapytanie searchbar:")
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

    setTimeout(() => {
      if ((this.state.inputValue.length === 0) && (this.state.getData === true)) {
        this.setState({
          getData: false
        })
      }
    }, 1000)
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
        <form className="search-form" onSubmit={this.sendHandler}>
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
