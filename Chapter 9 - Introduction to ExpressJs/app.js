// Core modules

// External modules
const express = require("express");

const PORT = 3000;
const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in 1st Middleware", req.url, req.method);
  // res.send("<p>Came from 1st Middleware</p>");
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in 2nd Middleware", req.url, req.method);
  res.send("<p>Welcome to my ExpressJs app</p>");
});

app.use("/", (req, res, next) => {
  console.log("Came in 1st (Copy) Middleware", req.url, req.method);
  res.send("<p>Came from another middleware</p>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
