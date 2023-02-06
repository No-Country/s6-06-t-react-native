const { validationResult } = require("express-validator");
const response=require("../helpers/response")

const validateFields = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return response.error(req,res,errors.mapped(),400)
    
  }

  next();
};

module.exports= validateFields;
