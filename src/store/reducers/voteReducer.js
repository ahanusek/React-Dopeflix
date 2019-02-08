import { ADDED_VOTE } from "../actions/voteAction";
import { GET_VOTE } from "../actions/voteAction";

const initialState = {
  loading: true,
  added: false,
  data: [],
  error: null
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_VOTE:
      return {
        ...state,
        added: true
      };
    case GET_VOTE:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    default:
      return state;
  }
};

export default voteReducer;
