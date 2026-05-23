import express from "express";
import { Login, Logout, Register } from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.post("/login", Login);
userRouter.post("/register", Register);
userRouter.post("/logout", Logout);

export default userRouter;
