const getLandingPage = (req, res, next) => {
  res.send(`
    <h1>Welcome to my ExpressJs app...!!!</h1>
    <ul>
      <li><a href="/contact-us">Contact us</a></li>
    </ul>
  `);

  next();
};

module.exports = getLandingPage;
