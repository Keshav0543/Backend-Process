import mongoose from "mongoose";

async function main() {

    await mongoose.connect('mongodb+srv://Keshav_MRROBOT:%40%40%40%40%40%40%40%40%21k1K@cluster0.0ysv0vg.mongodb.net/BookStore');

}

export default main;



 //Model create karna =>>>> collection banana
    // const user1 = new User({
    //     name: "Keshav Thakur",
    //     age: 23,
    //     city: "Virar",
    //     gender: "Male"
    // });
    // await user1.save();

    // await User.create({
    //     name: "Vikas",
    //     age: 23,
    //     city: "AntopHill",
    //     gender: "female"
    // });

    // const ans=await User.find({});
    // console.log(ans);

    //Find by specific key
    // const result= await User.find({name:"Keshav Thakur"});
    // console.log(result);