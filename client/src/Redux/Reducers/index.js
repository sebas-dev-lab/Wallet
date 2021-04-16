import { combineReducers } from "redux";
// Auth
import authReducers from "./authReducers";
const mainReducers = combineReducers({
  auth: authReducers,
});

export default mainReducers;
