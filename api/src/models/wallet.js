const { Schema, model } = require("mongoose");

const walletSchema = new Schema({
  wallet_name: {
    type: String,
  },
  wallet_coin: {
    type: [String],
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Wallet = model("Wallet", walletSchema);

module.exports = Wallet;
