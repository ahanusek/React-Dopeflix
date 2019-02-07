import authReducer from "./authReducer";
import trendingReducer from "./trendingReducer";
import seriesSearchReducer from "./seriesSearchReducer";
import movieSearchReducer from "./movieSearchReducer";
import seriesReducer from "./seriesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  trendingReducer: trendingReducer,
  seriesSearchReducer: seriesSearchReducer,
  movieSearchReducer: movieSearchReducer,
  seriesReducer: seriesReducer
});

export default rootReducer;
