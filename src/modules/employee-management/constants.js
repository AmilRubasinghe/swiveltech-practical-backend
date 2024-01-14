const _setCode = (code) => ({
  code: code, // custom_code
});

const Codes = {
  SUC_CODES: {
    ..._setCode(200),
    message: "Successfully retrieve Employees",
  },
  CREATE_SUC_CODES: {
    ..._setCode(201),
    message: "Successfully Added",
  },
  UPDATE_SUC_CODES: {
    ..._setCode(200),
    message: "Successfully Updated",
  },
  DELETE_SUC_CODES: {
    ..._setCode(200),
    message: "Successfully Deleted",
  },
};

const Gender = ["M", "F"];

module.exports = { Codes, Gender };
