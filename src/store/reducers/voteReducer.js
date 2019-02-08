import { ADD_VOTE } from "../actions/voteAction";

const initialState = {
  added: false
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VOTE:
      return {
        ...state,
        added: true
      };
    default:
      return state;
  }
};

export default voteReducer;
