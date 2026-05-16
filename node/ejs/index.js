const express = require("express");

const app = express();

//
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const siteName = "Adidas ";
  const searchText = "Search Now";
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
  });
});

app.get("/blog/:slug", (req, res) => {
  const blogTItle = "Adidas why and when?";
  const blogContent = "It is very good brand.";
  res.render("blogpost", {
    blogTItle: blogTItle,
    blogContent: blogContent,
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
