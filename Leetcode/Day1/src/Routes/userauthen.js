import express from "express";
import authController from "../controllers/userAuthent.js"
const authRouter=express.Router();
import userMiddleware from "../middlewares/usermiddleware.js";

//User Register

authRouter.post('/register',authController.register);

//User LOgin

authRouter.post('/login',authController.login);
//User logout

authRouter.post('/logout',userMiddleware,authController.logout);

//User fetchProfile

authRouter.get('/getProfile',userMiddleware,authController.getProfile);

export default authRouter;