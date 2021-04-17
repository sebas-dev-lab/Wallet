import axios from "axios";
import * as actionTypes from "./ActionTypes.js";
const URL = "http://localhost:4000";

export const singUp = (userName, password, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(
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
      history.push("/singin");
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

export const login = (userName, password, history) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${URL}/auth/login`,
      {
        userName: userName,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
    if (data) {
      dispatch({
        type: actionTypes.LOGIN_USER,
        user: data.user,
        total: data.total,
      });
      localStorage.setItem("token", data.token);
      history.push("/dash");
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

export const getCurrentUser = (token, history) => async (dispatch) => {
  let config = {
    headers: { "x-access-token": token },
  };
  const { data } = await axios.get(`${URL}/user`, config);
  if (data && data.type !== "expired") {
    dispatch({
      type: actionTypes.CURRENT_USER,
      user: data.user,
      total: data.total,
    });
  } else if (!data || data.type === "expired") {
    localStorage.removeItem("token");
    history.push("/");
  }
};

export const verifySession = (history) => (dispatch) => {
  const { token } = localStorage;
  if (token) {
    dispatch(getCurrentUser(token, history));
  } else {
    dispatch({
      type: actionTypes.NOT_CURRENT_USER,
      message: "No hay un usuario logueado.",
    });
    history.push("/");
  }
};

export const logout = (history) => async (dispatch) => {
  const { token } = localStorage;
  await axios
    .post(`${URL}/auth/logout`, {
      token: token,
    })
    .then((res) => {
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
      localStorage.removeItem("token");
      history.push("/");
    });
};
