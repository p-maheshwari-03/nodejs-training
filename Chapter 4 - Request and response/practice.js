const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method, url, headers } = req;

  switch (url.toLowerCase()) {
    case "/home": {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<body><h1>Welcome to Home page</h1></body>");
      res.write("</body>");
      res.write("</html>");
      break;
    }

    case "/men": {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<body><h1>Welcome to Men page</h1></body>");
      res.write("</body>");
      res.write("</html>");
      break;
    }

    case "/women": {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<body><h1>Welcome to women page</h1></body>");
      res.write("</body>");
      res.write("</html>");
      break;
    }

    case "/kids": {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<body><h1>Welcome to kids page</h1></body>");
      res.write("</body>");
      res.write("</html>");
      break;
    }

    case "/cart": {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<body><h1>Welcome to cart</h1></body>");
      res.write("</body>");
      res.write("</html>");
      break;
    }

    default: {
      res.setHeader("Content-Type", "text/html");
      res.write(`<html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>NodeJs Server</title>
        </head>
      <body>
        <head>
          <nav>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/men">Men</a></li>
              <li><a href="/women">Women</a></li>
              <li><a href="/kids">Kids</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
        </head>
      </body>
      </html>`);
    }
  }

  return res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
