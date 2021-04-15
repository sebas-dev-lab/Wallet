const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = {
  createToken: (user) => {
    const token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: 60 * 60 * 24,
    });
    return token;
  },
};
