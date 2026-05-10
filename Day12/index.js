import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import User from "./models/schema.js";
import main from "./database.js";
import ValidInput from "./utils/validator.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import userAuth from "./middleware/userAuth.js";
import authRouter from "./Routes/user.js"; 
import userRouter from "./Routes/auth.js";
import client from "./config/redis.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter);

app.use("/auth",authRouter);
app.use("/user",userRouter);



const InitializeConnection=async ()=>{
  try{

    await Promise.all([client.connect(),main()]);
    console.log("Connected To Reddis");
    console.log("Database connected Successfully...");
    app.listen(process.env.PORT, () => {
      console.log(`Server is Running on PortNo:${process.env.PORT}`);
    });

  }catch(err){
    console.log(err.message);
  }
}

InitializeConnection();
