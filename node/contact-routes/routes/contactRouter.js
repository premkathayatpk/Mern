const path = require("path");
const express = require("express");
const rootDir = require("../utils/pathUtil");

const contactRoute = express.Router();

contactRoute.get("/contact", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

contactRoute.post("/contact", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contact-succ.html"));
});

module.exports = contactRoute;
