import express from "express";
import User from "./models/schema.js";
import main from "./database.js";
import ValidInput from "./utils/validator.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import userAuth from "./middleware/userAuth.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.post("/register", async (req, res) => {
  try {
    ValidInput(req.body);

    req.body.password=await bcrypt.hash(req.body.password,10);
    await User.insertOne(req.body);
    res.send("Inserted Success...");
  } catch (err) {
    res.status(400).send(err.message);
  }
});


app.post("/login",async (req,res)=>{
  try{
    const data=await User.findOne({email:req.body.email});
    //Email Checking
    if(req.body.email !== data.email)throw new Error("Invalid Credentials");

    //Password Checking
    const IsAllowed=await bcrypt.compare(req.body.password,data.password);
    if(!IsAllowed) throw new Error("Invalid Credentials");

    //jwt 
    const token=jwt.sign({_id:data._id, email:data.email}, "\x61\x53\x42\x73\x62\x33\x5A\x6C\x49\x48\x55\x67\x63\x48\x4A\x68\x64\x47\x6C\x74\x59\x51\x3D\x3D")
    res.cookie("token",token);
    
    res.send("Login Successfuly...");   

  } catch(err){
    res.status(403).send(err.message);
  }
})


app.get("/info", async (req, res) => {
  try {
    const data = await User.find({});
    const {token}=req.cookies;
    if(!token) throw new Error("Token Dosen't Exist");

    const payload=jwt.verify(token,"\x61\x53\x42\x73\x62\x33\x5A\x6C\x49\x48\x55\x67\x63\x48\x4A\x68\x64\x47\x6C\x74\x59\x51\x3D\x3D");

    console.log(payload);
    res.send(data);
  } catch (err) {
      res.send(err.message);
  }
});

app.get("/user",userAuth,async (req, res) => {
  try {
    res.send(req.info_user);
  } 
  catch (err) {
    res.send(err.message);
  }
});

app.delete("/user",userAuth,async (req, res) => {
  try {
    await User.findByIdAndDelete(req.info_user._id);
    res.send("User Deleted!!!");
  } catch (err) {
    res.send(err.message);
  }
});


app.patch("/user", userAuth,async (req,res)=>{
    try{
        const update=req.body;
        await User.findByIdAndUpdate(req.info_user._id,update);
        res.send("User-info updated Successfully...");
    }
    catch(err){res.send(err.message)};
})

main()
  .then(() => {
    console.log("Database Connected Successfully...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });``
  })
  .catch((err) => console.log(err));