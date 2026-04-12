import express from "express";


const app=express();



app.use(/^\/abou?t$/, (req,res)=>{
    res.send("This is the about page...");
});

app.use("/contact",(req,res)=>{
    res.send("This is your contact Page");
})


app.use("/doc/:id/:user",(req,res)=>{
    console.log(req.params);
    res.send("Dynamic Api...");
})

app.use("/",(req,res)=>{
    res.send({"username":"Keshav","age":22, "password":"@@@@@@@@!k1K"});
})

app.listen(4000,()=>{
    console.log("Listening on port:4000");
})

