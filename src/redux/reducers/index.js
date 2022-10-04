import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import bookmarkReducer from "./bookmarkReducer";
const rootReducer = combineReducers({
  //reducer
  counterReducer,
  bookmarkReducer,
});

export default rootReducer;
