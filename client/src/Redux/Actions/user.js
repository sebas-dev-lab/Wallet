import axios from "axios";
import * as actionTypes from "./ActionTypes.js";

const URL = "http://localhost:4000";

export const getUserData = () => async (dispatch) => {
  try {
    const { token } = localStorage;
    const config = {
      headers: { "x-access-token": token },
    };
    const { data } = await axios.get(`${URL}/user/user`, config);
    if (data && data.dataUser) {
      dispatch({
        type: actionTypes.USER_DATA,
        user: data.user,
      });
    }
  } catch (e) {
    console.error(e);
  }
};

export const updateUserData = (userName, password) => async (dispatch) => {
  try {
    const { token } = localStorage;
    const config = {
      headers: { "x-access-token": token },
    };
    const { data } = await axios.put(
      `${URL}/user`,
      {
        userName: userName,
        password: password,
      },
      config
    );
    if (data && data.update) {
      dispatch(getUserData());
      alert("ok");
    }
  } catch (e) {
    console.error(e);
  }
};
