// Core modules
const path = require("path");

// External modules
const express = require("express");
const pageNotFoundRouter = express.Router();

// Local modules
const rootDir = require("../utils/pathUtil");

pageNotFoundRouter.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = pageNotFoundRouter;
