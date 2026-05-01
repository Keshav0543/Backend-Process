import jwt from "jsonwebtoken"
import User from "../models/schema.js";


const userAuth= async (req,res,next)=>{
    try{
    const {token}=req.cookies;
    if(!token) throw new Error("Token Dosen't Exist");

    const payload=jwt.verify(token,process.env.SECRET_KEY);
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