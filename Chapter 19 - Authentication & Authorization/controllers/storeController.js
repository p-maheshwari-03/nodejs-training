const Home = require("../models/home");
const User = require("../models/user");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
      isLoggedIn: req.isLoggedIn,
      user: req.session.user,
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.getFavouriteList = async (req, res, next) => {
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate("favourites");
  res.render("store/favourite-list", {
    favouriteHomes: user.favourites,
    pageTitle: "My Favourites",
    currentPage: "favourites",
    isLoggedIn: req.isLoggedIn,
    user: req.session.user,
  });
};

exports.postAddToFavourite = (req, res, next) => {
  const houseId = req.body.id;
  const userId = req.session.user._id;

  User.findById(userId)
    .then((user) => {
      if (user.favourites.includes(houseId)) {
        console.log("Already in Favourite");
        res.redirect("/favourites");
      } else {
        user.favourites.push(houseId);
        return user.save().then(() => {
          console.log("Marked as Favourite");
          res.redirect("/favourites");
        });
      }
    })
    .catch((error) => {
      console.log("Error while marking favourite: ", error);
    });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const houseId = req.params.homeId;
  const userId = req.session.user._id;

  User.findById(userId)
    .then((user) => {
      user.favourites = user.favourites.filter(
        (favId) => favId.toString() !== houseId
      );
      return user.save();
    })
    .catch((error) => {
      console.log("Error while removing from Favourite: ", error);
    });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
        isLoggedIn: req.isLoggedIn,
        user: req.session.user,
      });
    }
  });
};
