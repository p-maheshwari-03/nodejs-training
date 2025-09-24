// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const getUniqueId = () => {
  let id = Math.random().toString();

  if (id == 0 || id == 1) {
    id = getUniqueId();
  } else {
    id = id.substring(2);
    id = id.replace(/^0+|0+$/g, ""); // remove leading & trailing zeros
  }

  return id;
};

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    this.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked as favourite.");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
