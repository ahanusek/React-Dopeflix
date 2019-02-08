import authReducer from "./authReducer";
import trendingReducer from "./trendingReducer";
import seriesSearchReducer from "./seriesSearchReducer";
import movieSearchReducer from "./movieSearchReducer";
import seriesReducer from "./seriesReducer";
import movieReducer from "./movieReducer";
import voteReducer from "./voteReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  voteReducer: voteReducer,
  trendingReducer: trendingReducer,
  seriesSearchReducer: seriesSearchReducer,
  movieSearchReducer: movieSearchReducer,
  seriesReducer: seriesReducer,
  movieReducer: movieReducer
});

export default rootReducer;
