import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import accountReducer from "./accountReducer";

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  account: accountReducer
});
