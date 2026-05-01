import express from "express";
import User from "../models/schema.js";
import userAuth from "../middleware/userAuth.js";
const userRouter=express.Router();


userRouter.get("/info", async (req, res) => {
  try {
    const data = await User.find({});
    const {token}=req.cookies;
    if(!token) throw new Error("Token Dosen't Exist");

    const payload=jwt.verify(token,process.env.SECRET_KEY);

    console.log(payload);
    res.send(data);
  } catch (err) {
      res.send(err.message);
  }
});

userRouter.get("/",userAuth,async (req, res) => {
  try {
    res.send(req.info_user);
  } 
  catch (err) {
    res.send(err.message);
  }
});

userRouter.delete("/",userAuth,async (req, res) => {
  try {
    await User.findByIdAndDelete(req.info_user._id);
    res.send("User Deleted!!!");
  } catch (err) {
    res.send(err.message);
  }
});


userRouter.patch("/", userAuth,async (req,res)=>{
    try{
        const update=req.body;
        await User.findByIdAndUpdate(req.info_user._id,update);
        res.send("User-info updated Successfully...");
    }
    catch(err){res.send(err.message)};
})


export default userRouter;
