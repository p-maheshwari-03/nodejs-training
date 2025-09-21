const getContactUsPage = (req, res, next) => {
  res.send(`
    <h1>Contact us!!!</h1>
    <h2>Hii, please enter your details</h2>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Name" />
      <br/> <br/>
      <input type="email" name="email" placeholder="Email" />
      <br/> <br/>
      <button type="submit">Submit</button>
    </form>
  `);

  next();
};

module.exports = getContactUsPage;
