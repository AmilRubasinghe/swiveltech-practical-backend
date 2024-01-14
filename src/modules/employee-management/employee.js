const mongoose = require("mongoose");

const connection = require("../../../config/database");

const Constants = require("./constants");

const Schema = mongoose.Schema;

mongoose.connection = connection;

const employeeSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },

    first_name: { type: String, required: true },

    last_name: { type: String, required: true },

    email: { type: String, required: true },

    number: { type: String, required: true },

    photo: { type: String },

    gender: {
      type: String,
      enum: Object.values(Constants.Gender),
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("employee", employeeSchema);
