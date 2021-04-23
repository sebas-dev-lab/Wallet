import { USER_DATA } from "../Actions/ActionTypes";

const initialStae = {
  user: {},
  message: "",
};

const userReducers = (state = initialStae, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducers;
