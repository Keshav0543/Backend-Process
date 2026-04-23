import express from "express";
import main from "./Database.js";
import User from "./models/user.js";

const app=express();
app.use(express.json());


app.get("/info",async (req,res)=>{
    const data=await User.find({});
    res.send(data);
})

app.post("/info",async (req,res)=>{
    const user=new User(req.body);
    await user.save();
    res.send("Data Saved...");
})


app.delete("/info/:name",async (req,res)=>{
    await User.deleteOne({name:req.params.name});
    res.send("User Deleted Successfully...");
})

app.put("/info", async (req,res)=>{
    await User.updateOne({name:req.body.name},{age:req.body.age});
    res.send("Data is updated...");
})

main().then(async ()=>{
    console.log("Connected to Database");
    app.listen(3000,()=>{
    console.log("Server is Listening on port 3000");
})

})
.catch((err)=>console.log(err));
