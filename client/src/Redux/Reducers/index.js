// Reducer
import { combineReducers } from "redux";
// Auth
import authReducers from "./authReducers";

// Wallet
import walletReducer from "./walletReducers";

const mainReducers = combineReducers({
  auth: authReducers,
  wallet: walletReducer,
});

export default mainReducers;
