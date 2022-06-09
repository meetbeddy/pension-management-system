const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth");
const adminControllers = require("../controllers/adminControllers");

router.post("/signup", adminControllers.adminSignUp);
router.get("/rsa-request", auth, adminControllers.fetchRsaRequest);
router.put("/confirm-rsa", auth, adminControllers.confirmUser);
router.post("/addinvestment", auth, adminControllers.addInvestment);
router.post("/addfund", auth, adminControllers.addFund);
router.get("/fetchinvestments", auth, adminControllers.fetchInvestments);
router.get("/fetchemployees", auth, adminControllers.fetchEmployees);
router.post("/addcontribution", auth, adminControllers.addContribution);
router.post("/addroi", auth, adminControllers.addRoi);

module.exports = router;
