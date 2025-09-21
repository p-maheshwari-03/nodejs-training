// Core modules
const path = require("path");

// External modules
const express = require("express");
const homeRouter = express.Router();

// Local modules
const rootDir = require("../utils/pathUtil");

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
