import {
  SINGUP_USER,
  LOGIN_USER,
  SINGUP_USER_ERROR,
  LOGIN_USER_ERROR,
  CURRENT_USER,
  NOT_CURRENT_USER,
  LOGOUT_USER,
  DELETE_WALLET,
  DELETE_USER,
} from "../Actions/ActionTypes";

let initialState = {
  user: {},
  message: "",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SINGUP_USER:
      return {
        ...state,
        user: action.user,
      };
    case LOGIN_USER:
      return {
        ...state,
        message: action.message,
      };
    case CURRENT_USER:
      return {
        ...state,
        user: action.user,
      };
    case NOT_CURRENT_USER:
      return {
        ...state,
        message: action.message,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
      };
    case DELETE_USER:
      return {
        ...state,
        user: {},
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        message: action.message,
      };
    case SINGUP_USER_ERROR:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default authReducers;
