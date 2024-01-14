const { CUSTOM_CODE } = require("./statusCode");

const TE = (err) => {
  throw err;
};

const SUCCESS = (res, codeObj, data) => {
  const { code } = codeObj;

  let response = CUSTOM_CODE._200(data);

  if (code) {
    response = CUSTOM_CODE[`_${code}`](data, codeObj);
  }

  res.status(response.httpCode).json(response);

  return response;
};

const ERROR = (res, err) => {
  try {
    const error = err.error ? err.error : err;

    let response = CUSTOM_CODE._500(error);

    return res.status(response.httpCode).json(response);
  } catch (catchErr) {
    console.log("****", catchErr);

    const response = CUSTOM_CODE._400(err);

    return res.status(response.httpCode).json(response);
  }
};

const VALIDATION_ERROR = (res, err) => {
  try {
    const error = err.error ? err.error : err;

    let response = CUSTOM_CODE._400(error);

    return res.status(response.httpCode).json(response);
  } catch (catchErr) {
    console.log("****", catchErr);

    const response = CUSTOM_CODE._400(err);

    return res.status(response.httpCode).json(response);
  }
};

module.exports = {
  TE,
  SUCCESS,
  ERROR,
  VALIDATION_ERROR,
};
