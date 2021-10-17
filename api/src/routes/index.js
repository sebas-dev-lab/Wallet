const router = require("express").Router();

// Import routes
const authRouter = require("./auth");
const walletRouter = require("./wallet");
const userRouter = require("./user");
// Auth Routes
router.use("/dev/api/auth", authRouter);

// User routes
router.use("/dev/api/user", userRouter);

// wallet routes
router.use("/dev/api/wallet", walletRouter);

module.exports = router;
