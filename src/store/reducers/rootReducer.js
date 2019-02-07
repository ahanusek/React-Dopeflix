import authReducer from "./authReducer";
import fetchTrendingDataReducer from "./fetchTrendingDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  fetchTrendingDataReducer: fetchTrendingDataReducer
});

export default rootReducer;
