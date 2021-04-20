// ** SCHEMA IMPORT
const User = require("../models/users");
const Wallet = require("../models/wallet");
const { uniqueCoinsArr } = require("../services/auth");

// ** FUNCTIONS SERVICE IMPORT
const { findUser, findWallet } = require("../services/find");
const { balance, resolvePath } = require("../services/wallet");

exports.findUser = async (req, res) => {
  try {
    let id;
    if (!req.userId) {
      id = req.params.id;
    } else {
      id = req.userId;
    }
    const user = await findUser(id, "id");
    if (!user) {
      return res.status(404).json({ msj: "Could not be found" });
    }

    let total;
    let walletMsj = "No";
    if (user.wallet) {
      let coins = user.wallet;
      if (coins.length > 0) {
        let pathReconstruct = resolvePath(uniqueCoinsArr(coins));
        total = await balance(pathReconstruct);
        walletMsj = "ok";
      }
    }
    const send_user = {
      id: user._id,
      wallet: user.wallet,
      total: total,
      walletMsj,
    };
    console.log(send_user);
    return res.status(200).json({ msj: "ok", send_user });
  } catch (e) {
    console.error(e);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findUser(id, "id");
    if (!user) {
      return res.status(404).json({ msj: "Could not be found" });
    }
    const wallet_id = user.wallet;
    wallet_id.forEach(async (bill) => {
      let id = bill._id;
      await Wallet.deleteOne({ _id: id });
    });
    await User.deleteOne({ _id: id });
    const control = await findUser(id, "id");
    if (control) {
      return res.status(404).json({ msj: "Could not be deleted" });
    }
    return res.status(200).json({ msj: "ok" });
  } catch (e) {
    return res.satus(500).json({ msj: "Server error" });
  }
};
