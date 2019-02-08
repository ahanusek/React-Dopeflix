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
    const UID = this.props.UID;
    this.props.addVote(id, type, voteRating, UID);
  };

  componentDidMount() {
    const id = this.props.id;
    const type = this.props.type;
    const UID = this.props.UID;
    this.props.getVote(id, type, UID);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      const id = this.props.id;
      const type = this.props.type;
      const UID = this.props.UID;
      this.props.getVote(id, type, UID);
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
