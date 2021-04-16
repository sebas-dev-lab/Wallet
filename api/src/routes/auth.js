const router = require("express").Router();

// Import Middleware
const { verifyUserName } = require("../Middlewares/auth");

// Import controllers
const authControllers = require("../controllers/auth");
// SingUP
router.post("/", verifyUserName, authControllers.singUp);

// Login
router.post("/login", authControllers.login);

// Logout
router.post("/logout", authControllers.logout);

module.exports = router;
