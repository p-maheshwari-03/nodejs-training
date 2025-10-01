const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
    .populate("houseId")
    .then((favourites) => {
      const favouriteHomes = favourites.map((fav) => fav.houseId);
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
};

exports.postAddToFavourite = (req, res, next) => {
  const houseId = req.body.id;

  Favourite.findOne({ houseId })
    .then((fav) => {
      if (fav) {
        console.log("Already in Favourite");
        res.redirect("/favourites");
      } else {
        const newfav = new Favourite({ houseId });
        newfav.save().then(() => {
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
  Favourite.findOneAndDelete({ houseId })
    .then(() => console.log("Removed from favourites"))
    .catch((error) => {
      if (error) {
        console.log("Error while removing from Favourite", error);
      }
    })
    .finally(() => {
      res.redirect("/favourites");
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
      });
    }
  });
};
