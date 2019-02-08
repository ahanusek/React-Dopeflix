export const ADD_VOTE = "ADD_VOTE";

const addVote = voteValue => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection("test").add({ ocena: voteValue });
  };
};

export default addVote;
