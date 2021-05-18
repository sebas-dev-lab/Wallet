// ** SCHEMAS IMPORT
const User = require("../models/users");
// const Wallet = require("../models/wallet");

// **FUNTIONS SERVICES IMPORT
const { findUser } = require("../services/find");
const {
  createToken,
  saveTokenExpired,
  uniqueCoinsArr,
} = require("../services/auth");
const { balance, resolvePath } = require("../services/wallet");

exports.singUp = async (req, res) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    if (!userName || !password) {
      return res.status(400).json({ msj: "Data required" });
    }

    const newUser = new User({
      userName,
      password,
    });
    newUser.password = await newUser.encrypt(password);
    await newUser.save();
    const user = await User.findOne({ userName: userName });
    if (!user) {
      return res.status(404).json({ msj: "User could not be created" });
    }
    return res.status(201).json({ msj: "ok", auth: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({ msj: "Data required" });
    }
    const user = await findUser(userName, "userName");
    if (!user) {
      return res.status(404).json({ msj: "User could not be found" });
    }
    const isValid = await user.validatePassword(password);
    if (!isValid) {
      return res
        .status(401)
        .json({ auth: false, token: null, msj: "Password incorrect" });
    }

    const token = createToken(user);

    return res.status(200).json({ msj: "ok", auth: true, token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ msj: "Server error" });
  }
};

exports.logout = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      return res.status(400).json({ msj: "required token" });
    }
    const { userStatus, tokenStatus } = await saveTokenExpired(token);
    if (!userStatus || !tokenStatus) {
      return res.status(404).json({ msj: "could not be loguot" });
    }
    return res.status(200).json({ msj: "ok logout" });
  } catch (e) {
    console.log(e);
    res.json({ msj: "error", type: "expired", auth: false });
  }
};
