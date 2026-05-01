import express from "express";
import User from "../models/schema.js";
import bcrypt from "bcrypt";
import ValidInput from "../utils/validator.js";
import jwt from "jsonwebtoken";
const authRouter=express.Router();


authRouter.post("/register", async (req, res) => {
  try {
    ValidInput(req.body);

    req.body.password=await bcrypt.hash(req.body.password,10);
    await User.insertOne(req.body);
    res.send("Inserted Success...");
  } catch (err) {
    res.status(400).send(err.message);
  }
});


authRouter.post("/login", async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });

    // Check if user exists
    if (!data) throw new Error("Invalid Credentials");

    // Check password
    const isAllowed = await bcrypt.compare(req.body.password, data.password);
    if (!isAllowed) throw new Error("Invalid Credentials");

    // Generate JWT
    const token = data.getJWT();

    res.cookie("token", token);

    res.send("Login Successfully...");
  } catch (err) {
    res.status(403).send(err.message);
  }
});


authRouter.post("/logout",async (req,res)=>{
  try{
  //Verify token 
  const {token}=req.cookies;
  if(!token) throw new Error("Token Dosen't Exist");

  const payload=jwt.verify(token,process.env.SECRET_KEY);
  res.cookie("token",null,{expires:new Date(Date.now())});
  res.send("Logout successfully!!!");
  }
  catch(err){
    res.send(err.message);
  }
});

export default authRouter;