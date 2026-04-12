import express from "express";
const app=express();

//So middleware handle req on that url 
// like its works as hepler or we can say peuan
// it manage works like check authorization before patch delete get request
//and we the help of next function which is the third para we can 
// give the control to the real function or APi after checking stuff in middleware

app.use("/user",(req,res,next)=>{
    let Logdata = `${new Date().toISOString()} ${req.method} ${req.url}`;
    console.log(Logdata);
    next();
});



app.get("/user",(req,res)=>{
    res.send("Take some sip of coffee to do deep coding stuff!!!");
})

app.post("/user",(req,res)=>{
    res.send("Data is saved successfully");
})




app.listen(4000,()=>{
    console.log("listening on port 4000");
})