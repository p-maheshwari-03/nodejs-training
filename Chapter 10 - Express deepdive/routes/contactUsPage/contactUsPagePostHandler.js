const fs = require("fs");

const handleUserInfo = (req, res) => {
  console.log("Came in contactUsPagePostHandler", req.body);
  const body = req.body;
  const jsonString = JSON.stringify(body);
  fs.writeFile("user.txt", jsonString, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send("<h1>We'll contact you shortly...!!!</h1>");
    }
  });
};

module.exports = handleUserInfo;
