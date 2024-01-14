const express = require("express");

const { EmployeeRoutes } = require("./modules/employee-management");

const router = express.Router();

router.use("/employee", EmployeeRoutes);

module.exports = router;
