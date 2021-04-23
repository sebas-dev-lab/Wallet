// Reducer
import { combineReducers } from "redux";
// Auth
import authReducers from "./authReducers";
// User
import userReducers from "./user";
// Wallet
import walletReducer from "./walletReducers";

const mainReducers = combineReducers({
  auth: authReducers,
  wallet: walletReducer,
  user: userReducers,
});

export default mainReducers;
