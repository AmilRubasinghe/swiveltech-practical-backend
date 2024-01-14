const Joi = require("joi");
const { VALIDATION_ERROR } = require("../../helper");
const Constants = require("./constants");
const gender = Constants.Gender;

//product creation validation
const createSchema = Joi.object({
  id: Joi.string().optional(),
  first_name: Joi.string()
    .required()
    .regex(/^[a-zA-Z]*$/)
    .min(6)
    .max(10),
  last_name: Joi.string()
    .required()
    .regex(/^[a-zA-Z]*$/)
    .min(6)
    .max(10),
  email: Joi.string().required().email(),
  number: Joi.string()
    .required()
    .regex(/^(?:0|(?:\+94))[0-9]{9}$/),
  gender: Joi.string()
    .required()
    .valid(...gender),
  photo: Joi.string().optional().max(255),
});

//product update validation
const updateSchema = Joi.object({
  first_name: Joi.string()
    .optional()
    .regex(/^[a-zA-Z]*$/)
    .min(6)
    .max(10),
  last_name: Joi.string()
    .optional()
    .regex(/^[a-zA-Z]*$/)
    .min(6)
    .max(10),
  email: Joi.string().optional().email(),
  number: Joi.string()
    .optional()
    .regex(/^(?:0|(?:\+94))[0-9]{9}$/),
  gender: Joi.string()
    .optional()
    .valid(...gender),
  photo: Joi.string().optional().max(255),
});

const create = async (req, res, next) => {
  try {
    await createSchema.validateAsync(req.body);
    next();
  } catch (error) {
    VALIDATION_ERROR(res, error);
  }
};

const update = async (req, res, next) => {
  try {
    await updateSchema.validateAsync(req.body);
    next();
  } catch (error) {
    VALIDATION_ERROR(res, error);
  }
};

module.exports = {
  create,
  update,
};
