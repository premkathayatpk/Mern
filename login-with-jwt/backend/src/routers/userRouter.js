import express from "express";
import {
  getUser,
  Login,
  Logout,
  Register,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

export const userRouter = express.Router();

userRouter.post("/login", Login);
userRouter.post("/register", Register);
userRouter.get("/getMe", protect, getUser);
userRouter.post("/logout", Logout);

export default userRouter;
