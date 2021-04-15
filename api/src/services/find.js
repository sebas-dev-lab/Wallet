const User = require("../models/users");
const Wallet = require("../models/wallet");

module.exports = {
  findUser: async (item, type) => {
    let find_item;
    switch (type) {
      case "userName":
        find_item = await User.findOne({ userName: item });
        return find_item;
      case "id":
        find_item = await User.findOne({ _id: item });
        return find_item;

      default:
        break;
    }
  },
  findWallet: async (item, type) => {
    let find_item;
    switch (type) {
      case "wallet_name":
        find_item = await Wallet.findOne({ wallet_name: item });
        return find_item;
      case "id":
        find_item = await Wallet.findOne({ _id: item });
        return find_item;
      default:
        break;
    }
  },
};
