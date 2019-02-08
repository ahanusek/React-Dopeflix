import React, { Component } from "react";
import { connect } from "react-redux";
import { addVote } from "../../store/actions/voteAction";
import { getVote } from "../../store/actions/voteAction";
import BeforeVote from "../../components/Main/Vote/BeforeVote";
import AfterVote from "../../components/Main/Vote/AfterVote";

class Vote extends Component {
  voteClickHandler = voteValue => {
    const id = this.props.id;
    const type = this.props.type;
    const voteRating = voteValue.currentTarget.value;
    this.props.addVote(id, type, voteRating);
  };

  componentDidMount() {
    const id = this.props.id;
    const type = this.props.type;
    const userID = 123456;
    this.props.getVote(id, type, userID);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const id = this.props.id;
      const type = this.props.type;
      const userID = 123456;
      this.props.getVote(id, type, userID);
    }
  }

  render() {
    if (this.props.vote.loading) {
      return null;
    }

    if (this.props.vote.data.length > 0) {
      return <AfterVote voteRating={this.props.vote.data[0].voteRating} />;
    } else {
      return <BeforeVote voteClickHandler={this.voteClickHandler} />;
    }
  }
}

const mapStateToProps = state => {
  return {
    vote: state.voteReducer
  };
};

export default connect(
  mapStateToProps,
  { addVote, getVote }
)(Vote);
