// ** IMPORT MODULES
const jwt = require("jsonwebtoken");
const config = require("../../config");

// ** IMPORT FUNCTION SERVICE
const { findUser } = require("./find");

const expire = 60 * 60 * 24;

module.exports = {
  createToken: (user) => {
    const token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: expire,
    });
    return token;
  },
  saveTokenExpired: async (token) => {
    const decoded = jwt.verify(token, config.SECRET);
    const user = await findUser(decoded.id, "id");
    let userStatus = true;
    if (!user) {
      userStatus = false;
    }
    user.tokenExpired.push(token);
    await user.save();
    const user_control = await findUser(decoded.id, "id");
    let tokenStatus = false;
    user_control.tokenExpired.forEach((item) => {
      if (token === item) {
        tokenStatus = true;
      }
    });
    return {
      userStatus,
      tokenStatus,
    };
  },
  uniqueCoinsArr: (coins) => {
    let w_coin = [];
    coins.forEach((bill) => {
      w_coin.push(bill.wallet_coin);
    });
    let unique_arr_coin = [];
    for (let i in w_coin) {
      for (let j in w_coin[i]) {
        unique_arr_coin.push(w_coin[i][j]);
      }
    }
    return unique_arr_coin;
  },
  controlLog: async (token) => {
    try {
      console.log(token);
      const decoded = jwt.verify(token, config.SECRET);
      const userId = decoded.id;
      const timeToExp = new Date().getTime() / 1000;
      const expiredTimeControl = timeToExp > decoded.exp;
      const user = await findUser(userId, "id");
      let userStatus = false;
      if (!user) userStatus = true;
      let finalControl = false;
      user.tokenExpired.forEach((item) => {
        if (item === token) {
          finalControl = true;
        }
      });

      return {
        userId: userId,
        expiredTimeControl: expiredTimeControl,
        userStatus: userStatus,
        finalControl: finalControl,
        error: false,
      };
    } catch (e) {
      return { error: true };
    }
  },
};
