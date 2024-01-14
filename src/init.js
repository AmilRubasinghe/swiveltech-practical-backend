const { ACCESS_HEADERS } = require("../config/config");

const { ALLOW_HEADERS, ALLOWED_DOMAINS, ALLOW_METHODS } = ACCESS_HEADERS;

const accessHeader = (req, res, next) => {
  if (ALLOWED_DOMAINS.indexOf(req.headers.origin) !== -1) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);

    res.header("Access-Control-Allow-Methods", ALLOW_METHODS);

    res.header("Access-Control-Allow-Headers", ALLOW_HEADERS);
  }

  next();
};

module.exports = {
  accessHeader,
};
