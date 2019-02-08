export const ADDED_VOTE = "ADDED_VOTE";

const addVote = (id, type, voteRating) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const typeID = `prod${Math.random()}`;
    firestore
      .collection("vote")
      .doc(typeID)
      .set({
        id: id, // movie/series id from Vote component
        type: type, // movie/series type from Vote component
        voteRating: voteRating // rating (1, 2, 3, 4, 5),
      })
      .then(resp => {
        dispatch({
          type: ADDED_VOTE,
          resp: resp
        });
      });
  };
};

export default addVote;
