const Service = require("./service");

const { SUCCESS, ERROR } = require("../../helper");

const { SUC_CODES, CREATE_SUC_CODES, UPDATE_SUC_CODES, DELETE_SUC_CODES } =
  require("./constants").Codes;

const getEmployeesData = async (req, res) => {
  try {
    const result = await Service.getEmployeesData(req.query);

    SUCCESS(res, SUC_CODES, result);
  } catch (error) {
    ERROR(res, error);
  }
};

const getEmployee = async (req, res) => {
  try {
    const result = await Service.getEmployee(req.params);

    SUCCESS(res, SUC_CODES, result);
  } catch (error) {
    ERROR(res, error);
  }
};

const createEmployeeData = async (req, res) => {
  try {
    const result = await Service.createEmployeeData(req.body);

    SUCCESS(res, CREATE_SUC_CODES, result);
  } catch (error) {
    ERROR(res, error);
  }
};

const updateEmployeeData = async (req, res) => {
  try {
    const result = await Service.updateEmployeeData(req.params, req.body);

    SUCCESS(res, UPDATE_SUC_CODES, result);
  } catch (error) {
    ERROR(res, error, res.span);
  }
};

const deleteEmployeeData = async (req, res) => {
  try {
    const result = await Service.deleteEmployeeData(req.params);

    SUCCESS(res, DELETE_SUC_CODES, result);
  } catch (error) {
    ERROR(res, error, res.span);
  }
};

module.exports = {
  getEmployeesData,

  getEmployee,

  createEmployeeData,

  updateEmployeeData,

  deleteEmployeeData,
};
