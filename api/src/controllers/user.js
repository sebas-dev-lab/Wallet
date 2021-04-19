// ** SCHEMA IMPORT
const User = require("../models/users");
const Wallet = require("../models/wallet");

// ** FUNCTIONS SERVICE IMPORT
const { findUser, findWallet } = require("../services/find");
const { balance, resolvePath } = require("../services/wallet");

exports.findUser = async (req, res) => {
  try {
    let id;
    if (!req.userId) {
      id = req.params.id;
      console.log(id);
    } else {
      id = req.userId;
    }
    const user = await findUser(id, "id");
    if (!user) {
      return res.status(404).json({ msj: "Could not be found" });
    }
    let coins = user.wallet.wallet_coin;
    let pathReconstruct = resolvePath(coins);
    const total = await balance(pathReconstruct);
    return res.status(200).json({ msj: "ok", user, total });
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
    const wallet_id = user.wallet._id;
    await User.deleteOne({ _id: id });
    await Wallet.deleteOne({ _id: wallet_id });
    const control = await findUser(id, "id");
    const control_2 = await findWallet(wallet_id, "id");
    if (control && control_2) {
      return res.status(404).json({ msj: "Could not be found" });
    }
    return res.status(200).json({ msj: "ok" });
  } catch (e) {
    return res.satus(500).json({ msj: "Server error" });
  }
};
