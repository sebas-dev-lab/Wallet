const TTL = require("../models/TTL");

module.exports = {
  uniqueDB: async () => {
    const ttl = await TTL.find();
    const date = new Date();
    let today = date.toLocaleDateString();
    let exists;

    for (let i in ttl) {
      if (ttl[i].date === today) {
        exists = true;
      } else {
        exists = false;
      }
    }
    if (ttl.length === 0) {
      const newTtl = new TTL({
        date: today,
      });
      await newTtl.save();
      return true;
    }
    if (!exists) {
      const newTtl = new TTL({
        date: today,
      });
      await newTtl.save();
      return;
    }
    {
      return;
    }
  },
  verifyTtl: async (token) => {
    let status = false;
    const ttl = await TTL.find();
    for (let i in ttl) {
      if (ttl[i].date === date.toLocaleDateString()) {
        for (j in ttl[i].restricted_token) {
          if (ttl[i.restricted_token][j] === token) {
            status = true;
          }
        }
      }
    }
    return status;
  },
};
