const app = require("./server");
const mongoose = require("./db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error"));
db.once("open", () => {
  console.log("db connected");
});

app.listen(app.get("port"), () => {
  console.log(`Server on port${app.get("port")}`);
});
