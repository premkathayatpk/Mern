const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});
app.use("/user", (req, res, next) => {
  console.log("sec middleware", req.url, req.method);
  next();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
