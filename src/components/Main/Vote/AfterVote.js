import React from "react";

const AfterVote = ({ voteRating }) => {
  return (
    <div className="voted">
      <p>
        Twoja ocena to: <span>{voteRating}/5</span> gwiazdek.
      </p>
    </div>
  );
};
export default AfterVote;
