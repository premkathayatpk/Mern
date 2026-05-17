import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
