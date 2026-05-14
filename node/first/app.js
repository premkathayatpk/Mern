const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<header><title>Routing</title></header>");
  if (req.url === "/home") {
    res.write("<h1>Welcome to Home</h1>");

    res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to women page</h1>");
    res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to men page</h1>");
    res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to kids page</h1>");
    res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to cart page</h1>");
    res.end();
  }
  res.write(
    "<ul> <li><a href='/' >Home</a></li>  <li><a href='/women' >Women</a></li>  <li><a href='/men'> Men</a></li>   <li><a href='/kids' >Kids</a></li>   <li><a href='/cart' >Cart</a></li>  </ul> </html>",
  );
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
