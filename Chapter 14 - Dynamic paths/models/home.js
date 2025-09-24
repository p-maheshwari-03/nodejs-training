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

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    this.id = getUniqueId();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(id, callback) {
    this.fetchAll((registeredHomes) => {
      const home = registeredHomes.find((home) => home.id === id);
      callback(home);
    });
  }
};
