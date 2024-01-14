const mongoose = require("mongoose");

const { APPLICATION } = require("./config");

const database = APPLICATION.DB_NAME;
const DB_URL = APPLICATION.DB_URL;

const dbURL = `${DB_URL.replace("<DB_NAME>", database)}`;

const connection = mongoose
  .connect(dbURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connection;
