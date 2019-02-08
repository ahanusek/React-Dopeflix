import {
  FETCH_SERIES_SEARCH_BEGIN,
  FETCH_SERIES_SEARCH_SUCCESS,
  FETCH_SERIES_SEARCH_FAILURE
} from "../actions/seriesSearchAction";

const initialState = {
  data: {},
  inputValue: null,
  loading: true,
  error: null
};

const fetchSeriesSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERIES_SEARCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SERIES_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case FETCH_SERIES_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default fetchSeriesSearchReducer;
