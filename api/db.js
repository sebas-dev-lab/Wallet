const mongoose = require("mongoose");
const config = require("./config");

const { DATABASE, MONGODB_DB} = config;

const MONGODB_URI = `mongodb://${DATABASE}/${MONGODB_DB}`


mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

module.exports = mongoose;
