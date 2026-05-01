import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const {Schema}=mongoose;

const userdata= new Schema({
    
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20
    },
    lastName:{
        type:String
    },
    age:{
        type:Number,
        min:14,
        max:70,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female","Transgender"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim: true,
        immutable: true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String
    }
}, {timestamps:true})

userdata.methods.getJWT= function(){
   const token =jwt.sign({_id:this._id , email:this.email},process.env.SECRET_KEY);
   return token;
}


const User=mongoose.model("user",userdata);

export default User;