import axios from "axios";
import deleteUser from "../../services/alerts/deleteUser.js";
import updateUser from "../../services/alerts/updateUser.js";
import * as actionTypes from "./ActionTypes.js";
import Swal from "sweetalert2";
import { URL, PORT } from "../../services/config";
const API = `${URL}${PORT?`:${PORT}`:''}/dev/api`;

export const getUserData = () => async (dispatch) => {
  try {
    const { token } = localStorage;
    const config = {
      headers: { "x-access-token": token },
    };
    const { data } = await axios.get(`${API}/user/user`, config);
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
      `${API}/user`,
      {
        userName: userName,
        password: password,
      },
      config
    );
    if (data && data.update) {
      dispatch(getUserData());
      updateUser("ok");
    }
  } catch (e) {
    console.error(e);
  }
};

export const byeUser = (id, history) => (dispatch) => {
  deleteUser().then(async (res) => {
    if (res.isConfirmed) {
      const { token } = localStorage;
      const config = {
        headers: { "x-access-token": token },
      };
      const { data } = await axios.delete(`${API}/user/${id}`, config);
      if (data && data.delete === true) {
        dispatch({
          type: actionTypes.DELETE_USER,
        });
        localStorage.removeItem("token");
        Swal.fire("Ok", "Cuenta eliminada", "success");
        history.push("/");
      }
    }
  });
};
