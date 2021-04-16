import axios from "axios";
import * as actionTypes from "./ActionTypes.js";
const URL = "http://localhost:4000";

export const singUp = (userName, password) => async (dispatch) => {
  try {
    const data = await axios.post(
      `${URL}/auth`,
      {
        userName,
        password,
      },
      {
        withCredentials: true,
      }
    );
    if (data) {
      dispatch({
        type: actionTypes.SINGUP_USER,
        user: data.user,
      });
      localStorage.setItem("token", data.token);
    } else {
      console.log("no se pudo registrar");
    }
  } catch (e) {
    dispatch({
      type: actionTypes.SINGUP_USER_ERROR,
      message: "SingUp Error",
    });
    console.error(e);
  }
};

export const login = (userName, password) => async (dispatch) => {
  try {
    const data = await axios.get(
      `${URL}/auth`,
      {
        userName,
        password,
      },
      {
        withCredentials: true,
      }
    );
    if (data) {
      dispatch({
        type: actionTypes.LOGIN_USER,
        user: data.user,
      });
      localStorage.setItem("token", data.token);
    } else {
      console.log("no se pudo loguear");
    }
  } catch (e) {
    dispatch({
      type: actionTypes.LOGIN_USER_ERROR,
      message: "Login user error",
    });
    console.error(e);
  }
};

export const getCurrentUser = (token) => async (dispatch) => {
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const data = await axios.get(`${URL}/auth`, config);
  if (data) {
    dispatch({
      type: actionTypes.CURRENT_USER,
      user: data.user,
    });
  }
};

export const verifySession = () => (dispatch) => {
  const { token } = localStorage;
  if (token) {
    dispatch(getCurrentUser(token));
  } else {
    dispatch({
      type: actionTypes.NOT_CURRENT_USER,
      message: "No hay un usuario logueado.",
    });
  }
};

export const logout = (path) => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT_USER,
  });
  localStorage.removeItem("token");
  path.push("/");
};
