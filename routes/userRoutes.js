const express = require("express");
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

router.post("/register", async (req, res) => {
  try {

    const userExists = await User.findOne({ email: req.body.email });
    if(userExists){
      return res.status(200).send({ message: "User already exists", success: false });
    }
   const password = req.body.password;
   const salt = await bcrypt.genSaltSync(10);
   const hashPassword = await bcrypt.hash(password,salt);

   req.body.password = hashPassword;

   const newUser = new User(req.body);
   await newUser.save();

   res.status(200).send({message:"user created successfully",success:true})
  } catch (err) {
    console.log(error);
    res.status(500).send({ message: "Error creating user", success: false, error });
  }
});

router.post("/login", async (req, res) => {
  try {
  } catch (err) {}
});

module.exports = router;
