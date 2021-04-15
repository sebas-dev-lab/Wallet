const router = require("express").Router();

// Import Middleware
const { verifyUserName } = require("../Middlewares/auth");

// Import controllers
const authControllers = require("../controllers/auth");
// SingUP
router.post("/", verifyUserName, authControllers.singUp);

// Login
router.get("/", authControllers.login);

module.exports = router;
