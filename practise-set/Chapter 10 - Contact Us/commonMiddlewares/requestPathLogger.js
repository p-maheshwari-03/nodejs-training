const requestPathLogger = (req, res, next) => {
  console.log("Request URL:", req.url);
  next();
};

module.exports = requestPathLogger;
