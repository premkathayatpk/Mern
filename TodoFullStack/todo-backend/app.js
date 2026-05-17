import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Todo from "./models/Todo.js";

dotenv.config();

const app = express();

app.use(express.json());

let conn = mongoose.connect("mongodb://127.0.0.1:27017/TodoApp");

app.post("/addTodo", async (req, res) => {
  let data = req.body;
  let newData = await Todo.create(data);
  // let newData = new Todo(data);
  // await newData.save();
  console.log(req.url, data);
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running successfully http://localhost:${PORT}`);
});
