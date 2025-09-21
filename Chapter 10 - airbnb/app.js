// Core modules
const path = require("path");

// External modules
const express = require("express");

// Local modules
const rootDir = require("./utils/pathUtil");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const PORT = 3000;
const app = express();

// Parse body data
app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
