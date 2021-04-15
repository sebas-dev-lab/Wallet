const jwt = require("jsonwebtoken");
const config = require("../../config");
const { findUser } = require("../services/find");

module.exports = {
  verifyFn: async (req, res, next) => {
    try {
      const { id } = req.params;
      const token = req.headers["x-access-token"];
      if (!token) {
        return res.status(401).json({
          auth: false,
          msj: "Have not got token",
        });
      }
      const decoded = jwt.verify(token, config.SECRET);
      if (!decoded) {
        return res.status(401).json({ msj: "Can not logged" });
      }

      const user = await findUser(id, "id");
      req.userId = id;
      if (!user)
        return res.status(404).json({ msj: "User could not be found" });

      next();
    } catch (e) {
      console.error(e);
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
