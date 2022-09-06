const express = require("express");
const router = express.Router();
const User = require('../models/userModel');
const Doctor = require('../models/doctorModel')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middlewares/authmiddleware');

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
    const user = await User.findOne({ email: req.body.email });

    if(!user){
      return res.status(200).send({ message: "User does not exist", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(200).send({ message: "Password is incorrect", success: false });
    }else{
      const token = jwt.sign({id:user.id},process.env.JWT_SECRET,{
        expiresIn:"1d"
      });
      res.status(200).send({ message: "Login successful", success: true, data: token });
    }
  } catch (err) {
    console.log(err);
    res .status(500).send({ message: "Error logging in", success: false, error });
  }
});

router.post('/get-user-info-by-id',authMiddleware, async(req,res)=>{
  try{
   const user = await User.findOne({_id:req.body.userId});
   user.password = undefined;
   if(!user){
    return res.status({message:"User does not exist", success:false});

   }else{
    res.status(200).send({success:true, 
      data:user
      })
   }
  }catch(err){
    res.status(500).send({message:"Error getting user info", success:false, error})
  }
})
router.post("/apply-doctor-account", authMiddleware, async (req, res) => {
  try {
    const newdoctor = new Doctor({ ...req.body, status: "pending" });
    await newdoctor.save();
    const adminUser = await User.findOne({ isAdmin: true });

    const unseenNotifications = adminUser.unseenNotifications;
    unseenNotifications.push({
      type: "new-doctor-request",
      message: `${newdoctor.firstName} ${newdoctor.lastName} has applied for a doctor account`,
      data: {
        doctorId: newdoctor._id,
        name: newdoctor.firstName + " " + newdoctor.lastName,
      },
      onClickPath: "/admin/doctorslist",
    });
    await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });
    res.status(200).send({
      success: true,
      message: "Doctor account applied successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error applying doctor account",
      success: false,
      error,
    });
  }
});

module.exports = router;
