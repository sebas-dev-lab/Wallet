// ** SCHEMAS IMPORT
const Wallet = require("../models/wallet");

// ** FUNCTION SERVICE IMPORT
const { findWallet, findUser } = require("../services/find");

exports.postWallet = async (req, res) => {
  try {
    const user = await findUser(req.userId, "id");

    const neWallet = new Wallet({
      wallet_name: `ETH`,
      wallet_coint: "0x4de921237198b305d6d46a9f8c41a87625dfa6dc",
    });

    await neWallet.save();
    const wallet = await findWallet(`ETH`, "wallet_name");
    if (!wallet) {
      return res.status(404).json({ msj: "Could not be crated" });
    }

    user.wallet = wallet;
    await user.save();

    return res.status(201).json({ msj: "ok", wallet: wallet });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Server error" });
  }
};

exports.getWallet = async (req, res) => {
  try {
    const user = await findUser(req.userId, "id");
    if (!user.wallet) {
      return res.status(404).json({ msj: "user have not got wallet" });
    }
    const wallet_id = user.wallet._id;
    const wallet = await findWallet(wallet_id, "id");
    if (!wallet) {
      return res.status(404).json({ msj: "Wallet could not be found" });
    }
    return res.status(200).json({ msj: "ok", wallet: wallet });
  } catch (e) {
    console.error(e);
  }
};
