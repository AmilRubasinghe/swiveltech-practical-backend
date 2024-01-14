const express = require("express");

const Controller = require("./controller");

const router = express.Router();

const validator = require("./validator");

router
  .route("/")
  .get(Controller.getEmployeesData)
  .post(validator.create, Controller.createEmployeeData);

router
  .route("/:id")
  .get(Controller.getEmployee)
  .put(validator.update, Controller.updateEmployeeData)
  .delete(Controller.deleteEmployeeData);

module.exports = router;
