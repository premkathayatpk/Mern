import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./routers/userRouter.js";
import cookieParser from "cookie-parser";

const app = express();

//set cookeie parser
app.use(cookieParser());

//middleware
app.use(express.json());

//db connect
connectDB();

//API routers

app.use("/api/user/", userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
