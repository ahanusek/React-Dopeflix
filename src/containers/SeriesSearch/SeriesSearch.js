import React, { Component } from "react";
import axios, { key } from "../../axios";
import { Link } from "react-router-dom";

class SeriesSearchContainer extends Component {
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
      .get(`search/tv?api_key=${key}&language=pl&query=${this.state.inputValue}`)
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
    let SeriesSearchOutput;
        
    if(this.state.dataLoaded){
      SeriesSearchOutput = this.state.data.map(item => {
        return (
          <li className="search-output" key={item.id}>
            <Link to={"/series/" + item.id}>{item.original_name} <span>({item.first_air_date})</span></Link>
          </li>
        )
      })
    }

    return (
      <>
        <input
          className="search-input"
          onChange={this.changeHandler}
          type="text"
          placeholder="Wpisz nazwe serialu"
        />
        <ul>
          {SeriesSearchOutput}
        </ul>
      </>
    );
  }
}

export default SeriesSearchContainer;
