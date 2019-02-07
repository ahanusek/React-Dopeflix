import { URL, key } from "../../axios";
import axios from "axios";

export const FETCH_SERIES_BEGIN = "FETCH_SERIES_BEGIN";
export const FETCH_SERIES_SUCCESS = "FETCH_SERIES_SUCCESS";
export const FETCH_SERIES_FAILURE = "FETCH_SERIES_FAILURE";

export const fetchSeriesBegin = () => ({
  type: FETCH_SERIES_BEGIN
});

export const fetchSeriesSuccess = seriesID => {
  return dispatch => {
    axios
      .all([
        axios.get(`${URL}tv/${seriesID}?api_key=${key}&language=pl`),
        axios.get(`${URL}tv/${seriesID}/credits?api_key=${key}`),
        axios.get(`${URL}tv/${seriesID}/videos?api_key=${key}`),
        axios.get(`${URL}tv/${seriesID}/similar?api_key=${key}`)
      ])
      .then(
        axios.spread((series, cast, trailer, similar) => {
          dispatch({
            type: FETCH_SERIES_SUCCESS,
            series: series.data,
            cast: cast.data.cast,
            trailer: trailer.data,
            similar: similar.data
          });
        })
      )
      .catch(error => console.log(error));
  };
};

export const fetchSeriesFailure = error => ({
  type: FETCH_SERIES_FAILURE,
  payload: { error }
});
