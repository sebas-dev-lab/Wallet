const router = require("express").Router();

// Import Middleware
const { verifyFn } = require("../Middlewares/auth");

// Import Controllers
const userController = require("../controllers/user");

// routes
router.get("/", verifyFn, userController.findUser);
router.delete("/:id", verifyFn, userController.deleteUser);

module.exports = router;
