import axios, { key } from "../../axios";

export const FETCH_TRENDING_BEGIN = "FETCH_TRENDING_BEGIN";
export const FETCH_TRENDING_SUCCESS = "FETCH_TRENDING_SUCCESS";
export const FETCH_TRENDING_FAILURE = "FETCH_TRENDING_FAILURE";

export const fetchTrendingBegin = () => ({
  type: FETCH_TRENDING_BEGIN
});

export const fetchTrendingSuccess = () => {
  return dispatch => {
    axios
      .get(`trending/all/week?api_key=${key}&language=pl`)
      .then(response => {
        dispatch({
          type: FETCH_TRENDING_SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const fetchTrendingFailure = error => ({
  type: FETCH_TRENDING_FAILURE,
  payload: { error }
});
