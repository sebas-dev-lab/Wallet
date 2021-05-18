const router = require("express").Router();



// Import Middleware
const { verifyFn } = require("../Middlewares/auth");

// Import Controllers
const userController = require("../controllers/user");

// routes
// Get user logued by token
router.get("/", verifyFn, userController.findUser);

// Get user logued data
router.get("/user", verifyFn, userController.userData);

// Update user data
router.put("/", verifyFn, userController.updateUserData);

//If you have an admin you can use with params - create verify_role middleware
router.get("/:id", userController.findUser);

router.delete("/:id", verifyFn, userController.deleteUser);

module.exports = router;
