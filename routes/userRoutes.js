const express = require("express");
const router = express.Router();
const User = require('../models/userModel');


router.post("/register", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
  } catch (err) {}
});

router.post("/login", async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;
