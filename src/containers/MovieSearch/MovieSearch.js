import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovieSearchSuccess } from "../../store/actions/movieSearchAction";

class MovieSearchContainer extends Component {
  state = {
    inputValue: null
  };

  changeHandler = event => {
    this.setState({ inputValue: event.target.value });
    this.props.fetchMovieSearchSuccess(this.state.inputValue);
  };

  render() {
    console.log(this.props);
    const { data, loading } = this.props;
    let MovieSearchList;
    if (!loading) {
      MovieSearchList = data.map(item => {
        return (
          <li className="search-output" key={item.id}>
            <Link to={"/movie/" + item.id}>
              {item.original_title} <span>({item.release_date})</span>
            </Link>
          </li>
        );
      });
    }
    return (
      <>
        <input
          className="search-input"
          onChange={this.changeHandler}
          type="text"
          placeholder="Podaj nazwe filmu"
        />

        <ul>{MovieSearchList}</ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.movieSearchReducer.data,
    loading: state.movieSearchReducer.loading
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieSearchSuccess }
)(MovieSearchContainer);
