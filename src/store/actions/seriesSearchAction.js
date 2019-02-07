import axios, { key } from "../../axios";

export const FETCH_SERIES_SEARCH_BEGIN = "FETCH_SERIES_SEARCH_BEGIN";
export const FETCH_SERIES_SEARCH_SUCCESS = "FETCH_SERIES_SEARCH_SUCCESS";
export const FETCH_SERIES_SEARCH_FAILURE = "FETCH_SERIES_SEARCH_FAILURE";

export const fetchSeriesSearchBegin = () => ({
  type: FETCH_SERIES_SEARCH_BEGIN
});

export const fetchSeriesSearchSuccess = value => {
  return dispatch => {
    axios
      .get(`search/tv?api_key=${key}&language=pl&query=${value}`)
      .then(response => {
        dispatch({
          type: FETCH_SERIES_SEARCH_SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_SERIES_SEARCH_FAILURE,
          error: error
        });
      });
  };
};
