const EmployeeSchema = require("./employee");

const newOption = { new: true };

const createSingleRecode = async (singleRecode) => {
  return await EmployeeSchema.create(singleRecode);
};

const deleteSingleRecode = async (data) => {
  const result = await EmployeeSchema.findByIdAndDelete(data);
  return result;
};

const updateRecode = async (key, dataNeedToUpdate) =>
  await EmployeeSchema.findOneAndUpdate(
    key,
    { $set: { ...dataNeedToUpdate } },
    { ...newOption, runValidators: true }
  );

const findOneByQuery = async (query) => await EmployeeSchema.findOne(query);

const findByQuery = async (query) => {
  const { sortBy, sortOrder } = query;

  return await EmployeeSchema.find(query).sort({
    [sortBy ? sortBy : "createdAt"]: sortOrder ? sortOrder : -1,
  });
};

module.exports = {
  Schema: EmployeeSchema,

  updateRecode: updateRecode,

  findOneByQuery,

  findByQuery,

  createSingleRecode,

  deleteSingleRecode,
};
