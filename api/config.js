require("dotenv").config();
module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  MONGODB_DB: process.env.MONGODB_DB,
  SECRET: process.env.SECRET,
  APIETH: process.env.URL,
  CLIENT: process.env.CLIENT_URL,
  DEPLOY: process.env.DEPLOY,
};
