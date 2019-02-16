import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovieSearchSuccess } from "../../store/actions/movieSearchAction";
import ErrorInformations from "../../components/Main/ErrorInformations/ErrorInformations";
class MovieSearchContainer extends Component {
  state = {
    inputValue: null
  };

  changeHandler = event => {
    this.setState({ inputValue: event.target.value });
    this.props.fetchMovieSearchSuccess(this.state.inputValue);
  };

  render() {
    const { data, loading, error } = this.props;

    if (error) {
      const status = this.props.error.response.status;
      const msg = this.props.error.response.statusText;
      return <ErrorInformations status={status} msg={msg} />;
    }

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

        {this.state.inputValue ? <ul>{MovieSearchList}</ul> : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.movieSearchReducer.data,
    loading: state.movieSearchReducer.loading,
    error: state.movieSearchReducer.error
  };
};
export default connect(
  mapStateToProps,
  { fetchMovieSearchSuccess }
)(MovieSearchContainer);
