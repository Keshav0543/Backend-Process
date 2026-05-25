import dotenv from "dotenv";
dotenv.config();
import express from "express";
import main from "./config/db.js";
import cookieparser from "cookie-parser";

const app=express();

app.use(express.json());
app.use(cookieparser());

main().then(async ()=>{
    console.log("Database Connected Successfully...");
}).catch(err=> console.log(err.message));

app.listen(process.env.PORT,()=>{
    console.log(`Server listning On portNo: ${process.env.PORT}`);
})

