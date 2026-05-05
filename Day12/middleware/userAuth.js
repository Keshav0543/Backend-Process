import jwt from "jsonwebtoken"
import User from "../models/schema.js";
import client from "../config/redis.js";

const userAuth= async (req,res,next)=>{
    try{
    const {token}=req.cookies;
    if(!token) throw new Error("Token Dosen't Exist");

    const payload=jwt.verify(token,process.env.SECRET_KEY);
    const IsBlocked=await client.exists(`token:${token}`);

    if(IsBlocked)throw new Error("Token is expired...");

    const {_id}= payload;
    if(!_id) throw new Error("Id is missing");

    const info_user = await User.findById(_id);
    if(!info_user) throw new Error("User Dosent't Exist");

    req.info_user=info_user;

    next();
    }
    catch(err){
        res.send(err.message);
    }
}

export default userAuth;