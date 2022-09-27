const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_DB_COLLECTION_URL = process.env.MONGO_DB_COLLECTION_URL;

function connectToMongodb() {
  mongoose.connect(MONGO_DB_COLLECTION_URL);

  mongoose.connection.on("connected", () => {
    console.log("connected to mongodb successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log(err);
    console.log("An error occurred");
  });
}

module.exports = { connectToMongodb };
