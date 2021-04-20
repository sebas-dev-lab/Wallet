import { CREATE_WALLET, ERROR_CREATE_WALLET } from "../Actions/ActionTypes";

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
    default:
      return state;
  }
};

export default walletReducer;
