const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welocome to our home page");

  }
  if (req.url === "/about") {
    return res.end("Here is our short history");

  }

  return res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p> 
    <a href="/">Home</a>
  `);
});

server.listen(8200);