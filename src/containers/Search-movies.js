import React, { Component } from "react";
import axios from "axios";
import { Input } from "../components/Globalstyles/Input";
import { Form } from "../components/Globalstyles/Form";
import { Button } from "../components/Globalstyles/Button";
import Results from "../components/Header/Results";

class SearchMovies extends Component {
  state = {
    data: [],
    inputValue: null,
    getData: false
  };

  changeHandler = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  sendHandler = e => {
    e.preventDefault();
    const apiKey = "a70dbfe19b800809dfdd3e89e8532c9e";
    axios.defaults.baseURL = "https://api.themoviedb.org/3/search/";

    axios
      .get(`tv?api_key=${apiKey}&query=${this.state.inputValue}&language=pl`)
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data,
          getData: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let results;
    if (this.state.getData === true) {
      results = this.state.data.results.map(item => {
        return (
          <Results
            name={item.name}
            image={item.poster_path}
            description={item.overview}
            key={item.id}
          />
        );
      });
    }

    return (
      <>
        <Form onSubmit={this.sendHandler}>
          <Input
            type="text"
            onChange={this.changeHandler}
            placeholder="Wpisz nazwe filmu lub serialu.."
          />
          <Button type="submit">Zapytaj</Button>
        </Form>
        {results}
      </>
    );
  }
}

export default SearchMovies;
