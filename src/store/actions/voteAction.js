export const ADDED_VOTE = "ADDED_VOTE";
export const GET_VOTE = "GET_VOTE";

export const addVote = (id, type, voteRating) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("vote")
      .add({
        id: id, // movie/series id from Vote component
        type: type, // movie/series type from Vote component
        voteRating: voteRating, // rating (1, 2, 3, 4, 5),
        userID: 123456
      })
      .then(resp => {
        dispatch({
          type: ADDED_VOTE
        });
      });
  };
};

export const getVote = (id, type, userID) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    let data = [];
    firestore
      .collection("vote")
      .where("id", "==", id)
      .where("type", "==", type)
      .where("userID", "==", userID)
      .onSnapshot(snapshot => {
        snapshot.forEach(item => {
          data = [...data, item.data()];
        });

        dispatch({
          type: GET_VOTE,
          data: data
        });
      });
  };
};
