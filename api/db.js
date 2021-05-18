const mongoose = require("mongoose");
const config = require("./config");

const { DATABASE } = config;

mongoose.connect(DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
