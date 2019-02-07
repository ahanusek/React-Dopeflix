import {
  FETCH_MOVIE_SEARCH_BEGIN,
  FETCH_MOVIE_SEARCH_SUCCESS,
  FETCH_MOVIE_SEARCH_FAILURE
} from "../actions/movieSearchAction";

const initialState = {
  data: {},
  loading: true,
  error: null
};

const fetchMovieSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_MOVIE_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case FETCH_MOVIE_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: {}
      };
    default:
      return state;
  }
};

export default fetchMovieSearchReducer;
