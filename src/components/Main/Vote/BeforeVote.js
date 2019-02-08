import React from "react";

const BeforeVote = ({ voteClickHandler }) => {
  return (
    <>
      <p className="vote_text">Oceń film:</p>
      <div className="vote">
        <button value="5" onClick={voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="4" onClick={voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="3" onClick={voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="2" onClick={voteClickHandler}>
          <i className="fas fa-star" />
        </button>
        <button value="1" onClick={voteClickHandler}>
          <i className="fas fa-star" />
        </button>
      </div>
    </>
  );
};

export default BeforeVote;
