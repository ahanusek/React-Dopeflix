import authReducer from "./authReducer";
import trendingReducer from "./trendingReducer";
import seriesSearchReducer from "./seriesSearchReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  trendingReducer: trendingReducer,
  seriesSearchReducer: seriesSearchReducer
});

export default rootReducer;
