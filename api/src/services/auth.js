// ** IMPORT MODULES
const jwt = require("jsonwebtoken");
const config = require("../../config");

// ** IMPORT FUNCTION SERVICE
const { findUser } = require("./find");

module.exports = {
  createToken: (user) => {
    const token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: "120s",
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
  controlLog: async (token) => {
    try {
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

/* @Document ref: controlLog =>{

  LA FUNCION CONTROLLOG REEMPLAZA AL SIGUIENTE CODIGO EN AUTH-MIDDLEWARE

      const decoded = jwt.verify(token, config.SECRET);
      if (!decoded) {
        return res.status(401).json({ msj: "Can not logged" });
      }
      const timeToExp = new Date().getTime() / 1000;
      if (timeToExp > decoded.exp) {
        return res.status(404).json({ msj: "Token expired" });
      }
      req.userId = decoded.id;
      const user = await findUser(req.userId, "id");
      if (!user)
        return res.status(404).json({
          msj: "User could not be found",
          auth: false,
          type: "expired",
        });
      let finalControl = false;

      user.tokenExpired.forEach((item) => {
        if (item === token) {
          finalControl = true;
        }
      });
      if (finalControl) {
        return res.status(401).json({ msj: "Token error" });
      }
}  */

/*
  El siguiente código representa el de logout

const decoded = jwt.verify(token, config.SECRET);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) {
      return res.status(404).json({ msj: "error " });
    }
    user.tokenExpired.push(token);
    await user.save();

*/
