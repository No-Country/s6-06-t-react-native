const { query } = require("express");
const { param, check, q } = require("express-validator");
const { validateDb } = require("../helpers");
const {validateFields,validatePassword,} = require("../middlewares");
const { TokenRecover } = require("../models");

const create = [
  check("fullName", "fullName is required").not().isEmpty(),
  check("email", "name is required").isEmail(),
  check("password", "password must have 6 or more characters").isLength({
    min: 6,
  }),
  validateFields,
];

const login = [
  check("email", "name is required").isEmail(),
  check("password", "password must have 6 or more characters").isLength({
    min: 6,
  }),
  validateFields,
];

const resetPasswordRequest = [
  check("email", "name is required").isEmail(),
  validateFields,
];

const resetPassword = [
  check("password", "password must have 6 or more characters").isLength({
    min: 6,
  }),
  validatePassword,
  validateFields,
];

const validate = [
  check('token').not().isEmpty().isLength({
    min: 25,
  }),
  check("uid").isMongoId(),//.custom(async(uid)=>await validateDb(TokenRecover,"uid",uid)).not(),
  validateFields,
]

module.exports = {
  create,
  login,
  resetPasswordRequest,
  resetPassword,
  validate
  
};
