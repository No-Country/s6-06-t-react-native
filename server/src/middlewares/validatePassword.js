const response=require("../helpers/response")

const validatePassword= (req, res, next) => {
  const { password, validation } = req.body;


  if(password!==validation){
    return response.error(req, res, "Password not match", 400)
  }

  next();
};

module.exports = validatePassword;