const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URI =
  "mongodb+srv://airbnb_root:Pranav03@airbnb.z7tgiw7.mongodb.net/?retryWrites=true&w=majority&appName=airbnb";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URI)
    .then((client) => {
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
    });
};

const getDb = () => {
  if (!_db) {
    throw new Error("MongoDB not connected!");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
