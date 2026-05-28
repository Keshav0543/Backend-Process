import express from "express";
import adminMiddleware from "../middlewares/Adminmiddleware";
import userMiddleware from "../middlewares/usermiddleware";
const problemRouter=express.Router();
//Problem create
//fetch
//update
//delete
problemRouter.post('/create',adminMiddleware,problemCreate);
problemRouter.patch('/update',adminMiddleware,updateproblem);
problemRouter.delete('/delete',adminMiddleware,deleteproblem);

problemRouter.get('/fetch',userMiddleware,fetchProblem);
problemRouter.get('/user',userMiddleware,solvedProblem);