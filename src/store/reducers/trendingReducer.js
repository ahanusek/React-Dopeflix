import {
  FETCH_TRENDING_BEGIN,
  FETCH_TRENDING_SUCCESS,
  FETCH_TRENDING_FAILURE
} from "../actions/trendingAction";

const initialState = {
  data: [],
  loading: true,
  error: null
};

const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case FETCH_TRENDING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default trendingReducer;
