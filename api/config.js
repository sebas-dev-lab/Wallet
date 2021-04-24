require("dotenv").config();
module.exports = {
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  SECRET: process.env.SECRET,
  APIETH: process.env.URL,
  CLIENT: process.env.CLIENT_URL,
};
