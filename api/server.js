const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");

// Import routes
const router = require("./src/routes/index.js");

// Docs config
const swaggerUi = require("swagger-ui-express");
const swaggerConfing_users = require("./config/swagger.js");

// Server
const app = express();
app.set("port", config.PORT || 3001);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

// Connect db
// require("./db");

// Routes
app.use(router);

// Swagger config
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerConfing_users));

module.exports = app;
