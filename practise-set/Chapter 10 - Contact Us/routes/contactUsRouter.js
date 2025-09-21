// Core modules
const path = require("path");
const fs = require("fs");

// External modules
const express = require("express");
const contactUsRouter = express.Router();

// Local modules
const rootDir = require("../utils/pathUtil");

contactUsRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

contactUsRouter.post("/", (req, res, next) => {
  const body = req.body;
  const jsonString = JSON.stringify(body);

  fs.writeFile("user.txt", jsonString, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.sendFile(path.join(rootDir, "views", "contactUsResponse.html"));
    }
  });
});

module.exports = contactUsRouter;
