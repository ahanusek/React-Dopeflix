import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSeriesSearchSuccess } from "../../store/actions/seriesSearchAction";
import ErrorInformations from "../../components/Main/ErrorInformations/ErrorInformations";

class SeriesSearchContainer extends Component {
  state = {
    inputValue: null
  };

  changeHandler = event => {
    this.setState({ inputValue: event.target.value });
    this.props.fetchSeriesSearchSuccess(this.state.inputValue);
  };

  render() {
    const { data, loading, error } = this.props;

    if (error) {
      const status = this.props.error.response.status;
      const msg = this.props.error.response.statusText;
      return <ErrorInformations status={status} msg={msg} />;
    }

    let SeriesSearchList;

    if (!loading) {
      SeriesSearchList = data.map(item => {
        return (
          <li className="search-output" key={item.id}>
            <Link to={"/series/" + item.id}>
              {item.original_name} <span>({item.first_air_date})</span>
            </Link>
          </li>
        );
      });
    }
    return (
      <>
        <input
          type="text"
          className="search-input"
          placeholder="Podaj nazwe serialu"
          onChange={this.changeHandler}
        />

        {/* render of search list */}
        {this.state.inputValue ? <ul>{SeriesSearchList}</ul> : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.seriesSearchReducer.data,
    loading: state.seriesSearchReducer.loading,
    error: state.seriesSearchReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSeriesSearchSuccess }
)(SeriesSearchContainer);
