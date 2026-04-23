import mongoose from "mongoose";
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
        max:70
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

const User=mongoose.model("user",userdata);

export default User;