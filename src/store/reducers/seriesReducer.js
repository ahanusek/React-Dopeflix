import {
  FETCH_SERIES_BEGIN,
  FETCH_SERIES_SUCCESS,
  FETCH_SERIES_FAILURE
} from "../actions/seriesAction";

const initialState = {
  series: null,
  cast: null,
  trailer: null,
  similar: null,
  loading: true,
  error: null
};

const fetchSeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SERIES_SUCCESS:
      return {
        ...state,
        series: action.series,
        cast: action.cast,
        trailer: action.trailer,
        similar: action.similar,
        loading: false,
        error: null
      };

    case FETCH_SERIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default fetchSeriesReducer;
