import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from "../actions/movieAction";

const initialState = {
  movie: null,
  cast: null,
  trailer: null,
  similar: null,
  loading: true,
  error: null
};

const fetchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        movie: action.movie,
        cast: action.cast,
        trailer: action.trailer,
        similar: action.similar,
        loading: false,
        error: null
      };

    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default fetchMovieReducer;
