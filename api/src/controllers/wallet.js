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
      return res
        .status(206)
        .json({ msj: "Wallet does not exist", walletVerify: false });
    }
    const neWallet = new Wallet({
      wallet_name: wallet_name,
      wallet_coin: wallet_coint,
    });

    await neWallet.save();

    const wallet = await findWallet(wallet_coint, "wallet_coint");
    if (!wallet) {
      return res.status(404).json({ msj: "Could not be crated" });
    }

    user.wallet.push(wallet);
    await user.save();

    const findUser_wallet = await findUser(req.userId, "id");

    return res
      .status(201)
      .json({ msj: "ok", wallet: findUser_wallet.wallet, walletVerify: true });
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
