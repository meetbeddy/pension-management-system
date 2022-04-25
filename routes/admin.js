const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth");
const authController = require("../controllers/authController");
const adminControllers = require("../controllers/adminControllers");

router.post("/signup", adminControllers.adminSignUp);
router.get("/rsa-request", auth, adminControllers.confirmUser);

module.exports = router;
