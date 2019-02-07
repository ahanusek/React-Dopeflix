import authReducer from "./authReducer";
import trendingReducer from "./trendingReducer";
import seriesSearchReducer from "./seriesSearchReducer";
import movieSearchReducer from "./movieReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  trendingReducer: trendingReducer,
  seriesSearchReducer: seriesSearchReducer,
  movieSearchReducer: movieSearchReducer
});

export default rootReducer;
