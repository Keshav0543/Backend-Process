import jwt from "jsonwebtoken"
import User from "../models/schema.js";


const userAuth= async (req,res,next)=>{
    try{
    const {token}=req.cookies;
    if(!token) throw new Error("Token Dosen't Exist");

    const payload=jwt.verify(token,"\x61\x53\x42\x73\x62\x33\x5A\x6C\x49\x48\x55\x67\x63\x48\x4A\x68\x64\x47\x6C\x74\x59\x51\x3D\x3D")
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