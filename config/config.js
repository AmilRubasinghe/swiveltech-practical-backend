const dotenv = require("dotenv");
dotenv.config();

const APPLICATION = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  DB_URL: process.env.DB_URL,
  APP_URL: process.env.API_ENDPOINT,
};

const ACCESS_HEADERS = {
  ALLOWED_DOMAINS: ["http://127.0.0.1:8080", "http://localhost:8080"],

  ALLOW_METHODS: "GET,PUT,POST,DELETE,PATCH,OPTIONS",

  ALLOW_HEADERS:
    "Content-Type, Authorization, Content-Length, X-Requested-With",
};

const SWAGGER = {
  DEFINITION: (version) => ({
    swagger: "2.0",
    components: {},
    info: {
      title: `Employee Manager API ${version}`,
      version: require("../package.json").version,
      description: "Endpoints to test the Employee routes",
    },
    host: APPLICATION.API_ENDPOINT,
    basePath: `/`,
  }),

  APIS: {
    V1: ["Employee-management"],
  },
};

const BODYPARSER = {
  JSON_PARSER: {
    limit: "50mb",
  },

  URLENCODED: {
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  },
};

module.exports = {
  APPLICATION,

  BODYPARSER,

  ACCESS_HEADERS,

  SWAGGER,
};
