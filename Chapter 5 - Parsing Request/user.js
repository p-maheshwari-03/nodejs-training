const fs = require("fs");

const requestHandler = (req, res) => {
  const { method, url } = req;

  switch (url.toLowerCase()) {
    case "/": {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<h1>Welcome to home page</h1>");
      res.write("<h2>Hii, please enter your details</h2>");
      res.write('<form action="/submit-details" method="POST">');
      res.write(
        '<input type="text" name="name" placeholder="Enter your name" /> <br/>'
      );
      res.write('<label for="male">Male</label>');
      res.write('<input type="radio" id="male" name="gender" value="male">');
      res.write('<label for="female">Female</label>');
      res.write(
        '<input type="radio" id="female" name="gender" value="female">'
      );
      res.write('<br /><button type="submit">Submit</button>');
      res.write("</form>");
      res.write("</body>");
      res.write("</html>");
      break;
    }

    case "/submit-details": {
      if (method === "POST") {
        const body = [];

        req.on("data", (chunk) => {
          body.push(chunk);
        });

        req.on("end", () => {
          const fullBody = Buffer.concat(body).toString();
          const params = new URLSearchParams(fullBody);
          const bodyObject = Object.fromEntries(params);
          const jsonString = JSON.stringify(bodyObject);
          console.log(jsonString);
          fs.writeFileSync("user.txt", jsonString);
        });

        res.statusCode = 302; // Redirect
        res.setHeader("Location", "/products");
      } else {
        res.statusCode = 405; // Method Not Allowed
        res.write("<h1>Method Not Allowed</h1>");
      }
      break;
    }

    case "/products": {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<body><h1>Checkout our products</h1></body>");
      res.write("</body>");
      res.write("</html>");
      break;
    }

    default: {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>NodeJs Server</title></head>");
      res.write("<body>");
      res.write("<body><h1>Myntra</h1></body>");
      res.write("</body>");
      res.write("</html>");
    }
  }

  return res.end();
};

module.exports = requestHandler;
