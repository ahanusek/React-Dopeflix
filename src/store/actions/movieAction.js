import { URL, key } from "../../axios";
import axios from "axios";

export const FETCH_MOVIE_BEGIN = "FETCH_MOVIE_BEGIN";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

export const fetchMovieBegin = () => ({
  type: FETCH_MOVIE_BEGIN
});

export const fetchMovie = movieID => {
  return dispatch => {
    axios
      .all([
        axios.get(`${URL}movie/${movieID}?api_key=${key}&language=pl`),
        axios.get(`${URL}movie/${movieID}/videos?api_key=${key}`),
        axios.get(`${URL}movie/${movieID}/credits?api_key=${key}`),
        axios.get(`${URL}movie/${movieID}/similar?api_key=${key}`)
      ])
      .then(
        axios.spread((movie, trailer, cast, similar) => {
          dispatch({
            type: FETCH_MOVIE_SUCCESS,
            movie: movie.data,
            cast: cast.data.cast,
            trailer: trailer.data,
            similar: similar.data
          });
        })
      )
      .catch(error => {
        dispatch({
          type: FETCH_MOVIE_FAILURE,
          error: error
        });
      });
  };
};
