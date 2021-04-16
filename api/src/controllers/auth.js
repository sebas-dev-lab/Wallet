const User = require("../models/users");
const { findUser } = require("../services/find");
const Wallet = require("../models/wallet");
const { createToken } = require("../services/auth");
const { balance, resolvePath } = require("../services/wallet");
const TTL = require("../models/TTL");

exports.singUp = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(404).josn({ msj: "Data required" });
    }

    const newWallet = new Wallet({
      wallet_name: "ETH",
      wallet_coin: [
        "0x4de921237198b305d6d46a9f8c41a87625dfa6dc",
        "0x73c26dd2a28dd303aa2b9f339c664246e6331d8b",
      ],
    });

    const newUser = new User({
      userName,
      password,
      wallet: newWallet,
    });
    newUser.password = await newUser.encrypt(password);
    await newWallet.save();
    await newUser.save();
    const user = await User.findOne({ userName: userName });
    if (!user) {
      return res.status(400).json({ msj: "User could not be created" });
    }
    const token = createToken(user);
    return res
      .status(201)
      .json({ msj: "ok", auth: true, token: token, user: user });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    if (!userName || !password) {
      return res.status(404).json({ msj: "Data required" });
    }
    const user = await findUser(userName, "userName");
    if (!user) {
      return res.status(400).json({ msj: "User could not be found" });
    }
    const isValid = await user.validatePassword(password);
    if (!isValid) {
      return res
        .status(401)
        .json({ auth: false, token: null, msj: "Password incorrect" });
    }

    let coins = user.wallet.wallet_coin;
    let pathReconstruct = resolvePath(coins);
    const { total_1, total_2 } = await balance(pathReconstruct);

    const token = createToken(user);

    return res
      .status(200)
      .json({ msj: "ok", auth: true, token, user: user, total_1, total_2 });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Server error" });
  }
};

exports.logout = (req, res) => {
  const { token } = req.body;
  console.log(token);
  if (!token) {
    return res.status(404).json({ msj: "required token" });
  }
  TTL.find().then(async (ttl) => {
    let control_1;
    ttl[0].restricted_token.forEach((item) => {
      if (item === token) {
        control_1 = true;
      }
      return false;
    });
    if (control_1) {
      return res.status(404).json({ msj: "token already exists" });
    }
    ttl[0].restricted_token.push(token);
    await ttl[0].save();
    const control = await TTL.find();
    let token_i;
    control[0].restricted_token.forEach((tok) => {
      if (tok === token) {
        token_i = true;
      } else {
        token_i = false;
      }
    });
    if (!token_i) {
      return res.status(404).json({ msj: "token was not saved" });
    }
    return res.status(200).json({ msj: "logout ok" });
  });
};
