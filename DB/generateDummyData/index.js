import express from "express";
import mongoose from "mongoose";
import ejs from "ejs";
import Employee from "./models/Employee.js";

const app = express();

let con = mongoose.connect("mongodb://127.0.0.1:27017/company");

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index", { foo: "FOO" });
});

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1));
  return arr[rno];
};
app.get("/generate", async (req, res) => {
  await Employee.deleteMany({});
  const randomName = ["Ram", "Hari", "Shyam", "Sita", "Gita"];
  const randomLanguage = ["Java", "Python", "JS", "C"];
  const randomCity = ["Kathmandu", "Bhaktapur", "Lalitpur", "Pokhara"];
  for (let i = 0; i < 10; i++) {
    const e = await Employee.create({
      name: getRandom(randomName),
      salary: Math.floor(Math.random() * 20000),
      language: getRandom(randomLanguage),
      city: getRandom(randomCity),
      isManager: Math.random() < 0.5 ? true : false,
    });
  }

  console.log("Data created succ");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
