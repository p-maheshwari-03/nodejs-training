const requestmethodLogger = (req, res, next) => {
  console.log("Request Method:", req.method);
  next();
};

module.exports = requestmethodLogger;
