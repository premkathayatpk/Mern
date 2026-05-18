import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Todo from "./models/Todo.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

let conn = mongoose.connect("mongodb://127.0.0.1:27017/TodoApp");

app.post("/addTodo", async (req, res) => {
  try {
    let data = req.body;
    let newData = await Todo.create(data);
    // let newData = new Todo(data);
    // await newData.save();
    // console.log(newData);
    res.status(201).json({ message: "Data saved succ", todo: newData });
  } catch (error) {
    res.status(500).json({ error: "Internal server err" });
  }
});
app.get("/getTodo", async (req, res) => {
  try {
    let todos = await Todo.find({});
    // console.log(todos);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal server err" });
  }
});
app.put("/updateTodo/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const updateData = req.body;
    let updatedTodo = await Todo.findByIdAndUpdate(_id, updateData, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo item not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server err" });
  }
});

app.delete("/deleteTodo/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(_id);

    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo item is not founded" });
    }
    res.status(200).json({
      message: "Todo item deleted successfully",
      deletedTodo: deletedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server err" });
  }
});

app.delete("/clearTodo", async (req, res) => {
  try {
    const result = await Todo.deleteMany({});

    res.status(200).json({
      message: "Todo list clear successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server err" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running successfully http://localhost:${PORT}`);
});
