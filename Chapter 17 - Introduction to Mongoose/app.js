// Core Module
const path = require("path");

// External Module
const express = require("express");
const mongoose = require("mongoose");

//Local Module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

const PORT = 3000;
const DB_PATH =
  "mongodb+srv://airbnb_root:Pranav03@airbnb.z7tgiw7.mongodb.net/airbnb?retryWrites=true&w=majority&appName=airbnb";

mongoose
  .connect(DB_PATH)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
