// ** SCHEMAS IMPORT
const Wallet = require("../models/wallet");

// ** FUNCTION SERVICE IMPORT
const { findWallet, findUser } = require("../services/find");
const { verifyCoins, resolvePath } = require("../services/wallet");

exports.postWallet = async (req, res) => {
  try {
    const { wallet_name, wallet_coint } = req.body;
    const user = await findUser(req.userId, "id");

    let coin = [];
    coin.push(wallet_coint);
    const path = resolvePath(coin);
    const controlWallet = await verifyCoins(path);
    if (controlWallet === false) {
      return res.status(206).json({
        msj: "Wallet does not exist",
        walletVerify: false,
        exist: fasle,
      });
    }

    const walletControUser = await findWallet(wallet_coint, "wallet_coint");
    if (walletControUser) {
      return res.status(206).json({
        msj: "Wallet exist with other user",
        walletVerify: false,
        exist: true,
      });
    }

    const neWallet = new Wallet({
      wallet_name: wallet_name,
      wallet_coin: wallet_coint,
      user_id: req.userId,
    });

    await neWallet.save();

    const wallet = await findWallet(wallet_coint, "wallet_coint");
    if (!wallet) {
      return res.status(404).json({ msj: "Could not be crated" });
    }

    user.wallet.push(wallet);
    await user.save();

    const findUser_wallet = await findUser(req.userId, "id");

    return res.status(201).json({
      msj: "ok",
      wallet: findUser_wallet.wallet,
      walletVerify: true,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Server error" });
  }
};

exports.getWallet = async (req, res) => {
  try {
    const user = await findUser(req.userId, "id");
    if (user.wallet.length === 0) {
      return res.status(404).json({ msj: "user have not got wallet" });
    }
    const wallet = user.wallet;
    return res.status(200).json({ msj: "ok", wallet: wallet });
  } catch (e) {
    console.error(e);
  }
};

exports.deleteWallet = async (req, res) => {
  try {
    const { wallet_coin } = req.params;
    console.log(wallet_coin);
    const control_1 = await findWallet(wallet_coin, "wallet_coint");
    if (!control_1) {
      return res.status(404).json({ msj: "Wallet does not exist" });
    }
    await Wallet.deleteOne({ wallet_coin: wallet_coin });
    const control_2 = await findWallet(wallet_coin, "wallet_coint");
    if (control_2) {
      return res.status(400).json({ msj: "Could not be deleted", del: false });
    }
    const user = await findUser(req.userId, "id");
    const newWallets = user.wallet.filter(
      (bill) => bill.wallet_coin !== wallet_coin
    );
    user.wallet = [];
    user.wallet = newWallets;
    await user.save();
    return res.status(200).json({ msj: "ok", del: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Internal error", del: false });
  }
};
