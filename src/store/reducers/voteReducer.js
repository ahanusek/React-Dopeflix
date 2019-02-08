import { ADDED_VOTE } from "../actions/voteAction";

const initialState = {
  added: false,
  error: null
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_VOTE:
      return {
        ...state,
        added: true
      };
    default:
      return state;
  }
};

export default voteReducer;
