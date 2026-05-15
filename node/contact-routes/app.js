const path = require("path");
const express = require("express");
const rootDir = require("./utils/pathUtil");

const homeRoute = require("./routes/homeRouter");
const contactRoute = require("./routes/contactRouter");
const app = express();

app.use(express.urlencoded());

app.use(homeRoute);
app.use(contactRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
