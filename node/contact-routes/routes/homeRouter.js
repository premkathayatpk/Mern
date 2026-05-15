const path = require("path");
const express = require("express");
const rootDir = require("../utils/pathUtil");

const homeRoute = express.Router();

homeRoute.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRoute;
