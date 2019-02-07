import React, { Component } from "react";
import TrendingOutput from "../../components/Main/TrendingOutput/TrendingOutput";
import Loader from "../../components/Loader/Loader";
import { connect } from "react-redux";
import { fetchTrendingSuccess } from "../../store/actions/trendingAction";
import ErrorInformations from "../../components/Main/ErrorInformations/ErrorInformations";

class Trending extends Component {
  state = {
    // state for slider
    index: 0
  };

  componentDidMount() {
    this.props.fetchTrendingSuccess();

    // slider
    setInterval(() => {
      if (this.state.index < this.props.data.length - 1) {
        this.setState({
          index: this.state.index + 1
        });
      } else {
        this.setState({
          index: 0
        });
      }
    }, 5000);
  }

  render() {
    const { data, loaded, error } = this.props;

    if (error) {
      const status = this.props.error.response.status;
      const msg = this.props.error.response.statusText;
      return <ErrorInformations status={status} msg={msg} />;
    }

    if (loaded) {
      return <Loader />;
    } else {
      return (
        <TrendingOutput
          movieName={data[this.state.index].original_title}
          image={data[this.state.index].poster_path}
          description={data[this.state.index].overview}
          ratingCount={data[this.state.index].vote_count}
          rating={data[this.state.index].vote_average}
          picture={data[this.state.index].backdrop_path}
          releaseDate={data[this.state.index].release_date}
          id={data[this.state.index].id}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.trendingReducer.data,
    loaded: state.trendingReducer.loading,
    error: state.trendingReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchTrendingSuccess }
)(Trending);
