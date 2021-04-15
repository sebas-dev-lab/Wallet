const Wallet = require("../models/wallet");
const { findWallet } = require("../services/find");

exports.postWallet = async (req, res) => {
  try {
    const { wallet_name, wallet_coint } = req.body;
    if (!wallet_name || !wallet_coint) {
      return res.status(400).json({ msj: "Data is required" });
    }
    const neWallet = new Wallet({
      wallet_name,
      wallet_coint,
    });

    await neWallet.save();

    const wallet = await findWallet(wallet_name, "wallet_name");
    if (!wallet) {
      return res.status(404).json({ msj: "Could not be crated" });
    }
    return res.status(201).json({ msj: "ok", wallet: wallet });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Server error" });
  }
};

exports.getWallet = async (req, res) => {
  try {
    const { id } = req.params;
    const wallet = await findWallet(id, "id");
    if (!wallet) {
      return res.status(404).json({ msj: "Wallet could not be found" });
    }
    return res.status(200).josn({ msj: "ok", wallet: wallet });
  } catch (e) {
    console.error(e);
  }
};
