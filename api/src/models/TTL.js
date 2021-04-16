const { Schema, model } = require("mongoose");

const ttl = new Schema({
  restricted_token: {
    type: [String],
  },
  date: {
    type: String,
  },
});

const TTL = model("TTL", ttl);

module.exports = TTL;
