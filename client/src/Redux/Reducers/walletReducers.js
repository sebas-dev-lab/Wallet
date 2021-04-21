import {
  CREATE_WALLET,
  DELETE_WALLET,
  ERROR_CREATE_WALLET,
  ERROR_DELETE_WALLET,
} from "../Actions/ActionTypes";

const initialState = {
  wallets: [],
  wallet: {},
  message: "",
};

const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WALLET:
      return {
        ...state,
        wallets: state.wallets.concat(action.wallet),
      };
    case ERROR_CREATE_WALLET:
      return {
        ...state,
        message: action.message,
      };
    case DELETE_WALLET:
      return {
        ...state,
        wallets: state.wallets.filter(
          (bill) => bill.account !== action.wallet_account
        ),
      };
    case ERROR_DELETE_WALLET:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default walletReducer;
