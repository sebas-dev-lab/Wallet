const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
require('./Docs/auth')

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wallet: {
    type: [Schema.Types.ObjectId],
    ref: "Wallet",
    autopopulate: true,
  },
  tokenExpired: {
    type: [String],
  },
});

userSchema.plugin(require("mongoose-autopopulate"));

userSchema.methods.encrypt = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(pass, salt);
};

userSchema.methods.validatePassword = async function (pass) {
  return bcrypt.compare(pass, this.password);
};

const User = model("User", userSchema);

module.exports = User;
