const serverless = require("serverless-http");
const app = require("./server");
const mongoose = require("./db");
const { DEPLOY } = require("./config");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error"));
db.once("open", () => {
  console.log("db connected");
});


if (DEPLOY === "docker") {
  app.listen(app.get("port"), () => {
    console.log(`Server on port${app.get("port")}`);
  });
} else if (DEPLOY === "aws") {
  module.exports.handler = serverless(app);
}
