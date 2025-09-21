// External modules
const express = require("express");

// Local modules
const requestPathLogger = require("./commonMiddlewares/requestPathLogger");
const requestMethodLogger = require("./commonMiddlewares/requestMethodLogger");
const pageNotFoundRouter = require("./routes/pageNotFoundRouter");
const homeRouter = require("./routes/homeRouter");
const contactUsRouter = require("./routes/contactUsRouter");

const PORT = 3000;
const app = express();

app.use(express.urlencoded());

// Logger middlewares
app.use(requestPathLogger);
app.use(requestMethodLogger);

// Application routes
// Landing page route
app.use("/", homeRouter);

// Contact Us page routes
app.use("/contact-us", contactUsRouter);

// Page not found route - 404 handler
app.use(pageNotFoundRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
