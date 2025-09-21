// Core modules

// External modules
const express = require("express");

// Local modules
const requestPathLogger = require("./commonMiddlewares/requestPathLogger");
const requestMethodLogger = require("./commonMiddlewares/requestMethodLogger");
const sendUnhandledResponse = require("./commonMiddlewares/sendUnhandledResponse");
const landingPageHandler = require("./routes/landingPage/landingPageHandler");
const contactUsPageGetHandler = require("./routes/contactUsPage/contactUsPageGetHandler");
const contactUsPagePostHandler = require("./routes/contactUsPage/contactUsPagePostHandler");

const PORT = 3000;
const app = express();

// Logger middlewares
app.use(requestPathLogger);
app.use(requestMethodLogger);

// Application routes
// Landing page route
app.get("/", landingPageHandler);

// Contact Us page routes
app.get("/contact-us", contactUsPageGetHandler);
app.post("/contact-us", contactUsPagePostHandler);

// Middleware to handle unhandled requests
app.use(sendUnhandledResponse);

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
