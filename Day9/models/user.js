import {
    mongoose
} from "mongoose";
const {
    Schema
} = mongoose;


const userInfo = new Schema({
    name: String,
    age: Number,
    city: String,
    gender: String
})

const User = mongoose.model("user", userInfo);

export default User;