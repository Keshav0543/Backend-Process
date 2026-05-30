import express from "express";
import adminMiddleware from "../middlewares/Adminmiddleware.js";
import userMiddleware from "../middlewares/usermiddleware.js";
import CreateProblem from "../controllers/userProblem.js";
const problemRouter=express.Router();
//Problem create
//fetch
//update
//delete
problemRouter.post('/create',adminMiddleware,CreateProblem);
// problemRouter.patch('/:id',adminMiddleware,UpdateProblem);
// problemRouter.delete('/:id',adminMiddleware,DeleteProblem);

// problemRouter.get('/:id',userMiddleware,FetchProblem);
// problemRouter.get('/',userMiddleware,getAllProblem);
// problemRouter.get('/user',userMiddleware,SolvedProblem);

export default problemRouter;