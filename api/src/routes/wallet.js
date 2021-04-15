const router = require("express").Router();

// Import controllers
const walletControllers = require("../controllers/wallet");

// Routes
router.post("/", walletControllers.postWallet);
// data
router.get("/:id", walletControllers.getWallet);

module.exports = router;
