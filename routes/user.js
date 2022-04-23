const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth");
const authController = require("../controllers/authController");
const userController = require("../controllers/userControllers");

router.post("/signin", authController.signIn);
router.post("/signup", authController.signUp);
router.post("/register-rsa", auth, userController.registerRSA);

module.exports = router;
