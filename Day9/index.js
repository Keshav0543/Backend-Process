import express from "express";
import main from "./Database.js";
import User from "./models/user.js";

const app=express();
app.use(express.json());


app.get("/info",async (req,res)=>{
    const data=await User.find({});
    res.send(data);
})


main().then(async ()=>{
    console.log("Connected to Database");
    app.listen(3000,()=>{
    console.log("Server is Listening on port 3000");
})

})
.catch((err)=>console.log(err));
