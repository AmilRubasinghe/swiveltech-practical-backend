const DataBase = require("./database");

const { TE } = require("../../helper");

const generator = require("generate-password");

// Get employee by Id
const _getEmployeeById = async (filter) => {
  const getRecode = await DataBase.findOneByQuery(filter);

  if (!getRecode) TE("Id not found");

  return getRecode;
};

// Get employees
const getEmployeesData = async (params) => {
  return await DataBase.findByQuery(params);
};

// Get employee
const getEmployee = async (filter) => {
  const getRecode = await _getEmployeeById(filter);
  return getRecode;
};

// Post employee
const createEmployeeData = async (data) => {
  let storeData = data;

  if (!storeData.id)
    storeData.id = generator.generate({
      length: 4,
      numbers: true,
      uppercase: false,
      lowercase: false,
    });

  const createSingleRecode = DataBase.createSingleRecode(storeData);

  return createSingleRecode;
};

// Update employee
const updateEmployeeData = async (filter, updateData) => {
  const getRecode = await _getEmployeeById(filter);

  const updateRecode = await DataBase.updateRecode(
    { _id: getRecode._id },
    updateData
  );

  return updateRecode;
};

// Delete employee
const deleteEmployeeData = async (data) => {
  const getRecode = await _getEmployeeById(data);

  const deleteRecode = await DataBase.deleteSingleRecode({
    _id: getRecode._id,
  });

  return deleteRecode;
};

module.exports = {
  getEmployeesData,

  getEmployee,

  createEmployeeData,

  updateEmployeeData,

  deleteEmployeeData,
};
