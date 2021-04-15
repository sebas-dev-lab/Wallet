const router = require("express").Router();

// Import routes
const authRouter = require("./auth");
const walletRouter = require("./wallet");
const userRouter = require("./user");
// Auth Routes
router.use("/auth", authRouter);

// User routes
router.use("/user", userRouter);

// wallet routes
router.use("/wallet", walletRouter);

module.exports = router;
