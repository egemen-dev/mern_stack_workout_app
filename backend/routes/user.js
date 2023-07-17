const express = require("express");

// import user controller functions
const { userLogin, userRegister } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", userLogin);

// register route
router.post("/register", userRegister);

module.exports = router;
