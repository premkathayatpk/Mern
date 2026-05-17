import mongoose, { Schema } from "mongoose";

const EmployeeSchema = new Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

const Employee = mongoose.model("Employee", EmployeeSchema);
export default Employee;
