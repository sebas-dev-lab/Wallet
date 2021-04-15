const axios = require("axios");
const config = require("../../config");

module.exports = {
  balance: async (APIREC) => {
    const { data } = await axios.get(APIREC);
    let sum = 0;
    data.result.forEach((item) => {
      sum = sum + item.balance;
    });
    let total_1 = sum;
    let total_2 = sum / 1000000000000000;
    return { total_1, total_2 };
  },
  resolvePath: (coins) => {
    const url = config.APIETH;
    let concat = [];
    let i = 0;
    while (i < coins.length - 1) {
      concat.push(coins[i] + ",");
      i++;
      if (i === coins.length - 1) {
        concat.push(coins[i]);
      }
    }
    const apiRec =
      url +
      "&address=" +
      concat.join("") +
      "&tag=latest&apikey=869Z76H93375IKC5FXRE2NEEZZTIE3GQ6H";

    return apiRec;
  },
};