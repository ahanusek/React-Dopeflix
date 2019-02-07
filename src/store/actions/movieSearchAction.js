import axios, { key } from "../../axios";

export const FETCH_MOVIE_SEARCH_BEGIN = "FETCH_MOVIE_SEARCH_BEGIN";
export const FETCH_MOVIE_SEARCH_SUCCESS = "FETCH_MOVIE_SEARCH_SUCCESS";
export const FETCH_MOVIE_SEARCH_FAILURE = "FETCH_MOVIE_SEARCH_FAILURE";

export const fetchMovieSearchBegin = () => ({
  type: FETCH_MOVIE_SEARCH_BEGIN
});

export const fetchMovieSearchSuccess = value => {
  // console.log(value.target.value);
  return dispatch => {
    axios
      .get(`search/movie?api_key=${key}&language=pl&query=${value}`)
      .then(response => {
        dispatch({
          type: FETCH_MOVIE_SEARCH_SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => console.log(error));
  };
};

export const fetchMovieSearchFailure = error => ({
  type: FETCH_MOVIE_SEARCH_FAILURE,
  payload: { error }
});
