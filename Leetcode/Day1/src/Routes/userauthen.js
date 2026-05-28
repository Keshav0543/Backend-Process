import express from "express";
import authController from "../controllers/userAuthent.js"
const authRouter=express.Router();
import userMiddleware from "../middlewares/usermiddleware.js";
import adminMiddleware from "../middlewares/Adminmiddleware.js";
//User Register

authRouter.post('/register',authController.register);
authRouter.post('/login',authController.login);
authRouter.post('/logout',userMiddleware,authController.logout);
authRouter.get('/getProfile',userMiddleware,authController.getProfile);
authRouter.post("/admin/register",adminMiddleware,authController.admin);

export default authRouter;