const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const config = require("./config");

// Import routes
const router = require("./src/routes/index.js");
const { uniqueDB } = require("./src/services/ttl");

// Server
const app = express();
app.set("port", config.PORT || 3001);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: `${config.CLIENT}`,
  })
);

// Create unique TTL
// uniqueDB();

// Routes
app.use(router);

module.exports = app;
