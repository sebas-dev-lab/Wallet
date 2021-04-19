const router = require("express").Router();

// Import controllers
const walletControllers = require("../controllers/wallet");
const { verifyFn } = require("../Middlewares/auth");

// Routes
router.post("/", verifyFn, walletControllers.postWallet);
// data
router.get("/", verifyFn, walletControllers.getWallet);

module.exports = router;
