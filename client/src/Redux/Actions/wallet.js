import axios from "axios";
import * as actionTypes from "./ActionTypes";
import { getCurrentUser, verifySession } from "./auth";
import walletAlert from "../../services/alerts/wallet";

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
    console.log(data);
    if (data.walletVerify === true) {
      dispatch(getCurrentUser(token, history));
      dispatch({
        type: actionTypes.CREATE_WALLET,
        wallet: data.wallet,
      });
      walletAlert("ok");
    } else if (data.walletVerify === false) {
      walletAlert("error");
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
