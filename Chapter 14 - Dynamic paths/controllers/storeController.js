const Home = require("../models/home");
const Favourite = require("../models/favourite");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favouriteIds) => {
    Home.fetchAll((registeredHomes) => {
      const filteredHomes = registeredHomes.filter((home) =>
        favouriteIds.includes(home.id)
      );

      res.render("store/favourite-list", {
        registeredHomes: filteredHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req?.body?.id;
  Favourite.addToFavourite(homeId, (err) => {
    if (err) {
      console.log("Error while marking favourite: ", err);
    }
  });
  res.redirect("/favourites");
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.body.homeId;
  console.log("Requested Home ID:", homeId);

  Home.findById(homeId, (home) => {
    console.log("Fetched Home:", home);
    if (!home) {
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: home.houseName,
        currentPage: "Home",
      });
    }
  });
};
