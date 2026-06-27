const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  registerValidation,
  validate,
} = require("../validators/validationRules");

router.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);

router.post("/login", loginUser);

module.exports = router;