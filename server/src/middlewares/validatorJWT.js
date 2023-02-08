const jwt = require("jsonwebtoken");
const response=require("../helpers/response")

const validatorJWT = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return response.error(req,res,"Invalid Token",400)
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);

    req.uid = payload.uid;
    req.name = payload.name;
    
  } catch (e) {
    console.log(e)
    return response.error(req,res,"Contact admin")
  }

  next();
};

module.exports= validatorJWT;
