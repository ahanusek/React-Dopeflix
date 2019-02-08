import React, { Component } from "react";
import { connect } from "react-redux";
import addVote from "../../store/actions/voteAction";
import "./vote.scss";

class Vote extends Component {
  voteClickHandler = voteValue => {
    const id = this.props.id;
    const type = this.props.type;
    const voteRating = voteValue.currentTarget.value;
    this.props.addVote(id, type, voteRating);
  };

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="vote">
        <button value="5" onClick={this.voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="4" onClick={this.voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="3" onClick={this.voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="2" onClick={this.voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="1" onClick={this.voteClickHandler}>
          <i className="fas fa-star" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vote: state.voteReducer
  };
};

export default connect(
  mapStateToProps,
  { addVote }
)(Vote);
