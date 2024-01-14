// Success code creator
const resSuccess = (data, htCode, cc = null) => {
  return {
    httpCode: htCode,
    type: "SUCCESS",
    code: cc?.code ? cc.code : htCode,
    message: cc?.message ? cc.message : "ok",
    success: true,
    data: data,
  };
};

// Error code creator
const resError = (err, type, htCode) => {
  let error = "";

  if (typeof err === "string") error = err;

  if (err.message) error = err.message;

  if (typeof err === "object") {
    error = JSON.stringify(err);
  }

  console.log(err);

  return {
    httpCode: htCode,
    type: type,
    code: htCode,
    message: error,
    success: false,
  };
};

const CUSTOM_CODE = {
  _200: (data, cc = null) => ({ ...resSuccess(data, 200, cc) }),

  _201: (data, cc = null) => ({ ...resSuccess(data, 201, cc) }),

  _400: (e) => ({
    ...resError(e ? e : "bad request", "BAD_REQUEST", 400),
  }),

  _401: (e) => ({
    ...resError(e ? e : "unauthorized", "UNAUTHORIZED", 401),
  }),

  _404: (e) => ({
    ...resError(e ? e : "not found", "NOT_FOUND", 404),
  }),

  _500: (e) => ({
    ...resError(e ? e : "server error", "INTERNAL_SERVER_ERROR", 500),
  }),
};

module.exports = {
  CUSTOM_CODE,
};
