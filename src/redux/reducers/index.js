import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import movieListReducer from "./movieListReducer";

export default combineReducers({
  movie: movieReducer,
  detail: movieDetailReducer,
  list: movieListReducer,
});
