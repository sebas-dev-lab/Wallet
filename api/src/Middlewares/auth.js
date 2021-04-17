// ** FUNTION SERVICE IMPORT
const { controlLog } = require("../services/auth");
const { findUser } = require("../services/find");

module.exports = {
  verifyFn: async (req, res, next) => {
    try {
      const token = req.headers["x-access-token"];
      if (!token) {
        return res.status(401).json({
          auth: false,
          msj: "Have not got token",
        });
      }
      const {
        userId,
        expiredTimeControl,
        userStatus,
        finalControl,
        error,
      } = await controlLog(token);
      if (error || expiredTimeControl || finalControl || userStatus) {
        return res
          .status(203)
          .json({ msj: "Login error", auth: false, type: "expired" });
      }
      req.userId = userId;
      next();
    } catch (e) {
      res.json({ auth: false, type: "expired" });
    }
  },
  verifyUserName: async (req, res, next) => {
    try {
      const { userName } = req.body;
      if (!userName) {
        return res.status(404).json({ msj: "User Name is required" });
      }
      const user = await findUser(userName, "userName");
      if (user) return res.status(400).json({ msj: "User Name already exist" });
      next();
    } catch (e) {
      console.error(e);
    }
  },
};
