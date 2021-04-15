const { Schema, model } = require("mongoose");

const walletSchema = new Schema({
  wallet_name: {
    type: String,
  },
  wallet_coin: {
    type: [String],
  },
});

const Wallet = model("Wallet", walletSchema);

module.exports = Wallet;
