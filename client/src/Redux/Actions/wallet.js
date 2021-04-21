import axios from "axios";
import * as actionTypes from "./ActionTypes";
import { getCurrentUser, verifySession } from "./auth";
import walletAlert from "../../services/alerts/wallet";
import delWalletAlert from "../../services/alerts/delWallet";
import Swal from "sweetalert2";

const URL = "http://localhost:4000";

export const addWallet = (wallet_name, wallet_coint, history) => async (
  dispatch
) => {
  try {
    const { token } = localStorage;
    let config = {
      headers: { "x-access-token": token },
    };
    const { data } = await axios.post(
      `${URL}/wallet`,
      {
        wallet_name: wallet_name,
        wallet_coint: wallet_coint,
      },
      config
    );
    if (data.walletVerify === true) {
      dispatch(getCurrentUser(token, history));
      dispatch({
        type: actionTypes.CREATE_WALLET,
        wallet: data.wallet,
      });
      walletAlert("ok");
    } else if (data.walletVerify === false) {
      if (data.exist === true) {
        walletAlert("error", "exist");
        return;
      } else {
        walletAlert("error");
      }
    }
  } catch (e) {
    console.error(e);
    dispatch({
      type: actionTypes.ERROR_CREATE_WALLET,
      message: "Error",
    });
    walletAlert("error");
  }
};

export const delWallet = (account, history) => async (dispatch) => {
  try {
    delWalletAlert().then(async (res) => {
      if (res.isConfirmed) {
        const { token } = localStorage;
        let config = {
          headers: { "x-access-token": token },
        };
        const { data } = await axios.delete(`${URL}/wallet/${account}`, config);
        if (data) {
          if (data.del === true) {
            dispatch({
              type: actionTypes.DELETE_WALLET,
              message: "ok",
              wallet_account: account,
            });
            Swal.fire("Eliminado!", "Billetera eliminada", "success");
            dispatch(getCurrentUser(token, history));
            return;
          }
        }
        dispatch({
          type: actionTypes.ERROR_DELETE_WALLET,
          message: "error",
        });
        Swal.fire("Error!", "Billetera no se pudo eliminar", "error");
      }
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: actionTypes.ERROR_DELETE_WALLET,
      message: "error",
    });
    Swal.fire("Error!", "Billetera no se pudo eliminar", "error");
  }
};
