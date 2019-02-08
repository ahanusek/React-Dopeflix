import React, { Component } from "react";
import { connect } from "react-redux";
import addVote from "../../store/actions/voteAction";
import "./vote.scss";

class Vote extends Component {
  voteClickHandler = voteValue => {
    this.props.addVote(voteValue.currentTarget.value);
    console.log(voteValue.currentTarget.value);
  };

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
  console.log(state);
  return state;
};

export default connect(
  mapStateToProps,
  { addVote }
)(Vote);
