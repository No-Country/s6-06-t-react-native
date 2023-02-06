const jwt = require("jsonwebtoken");
const response=require("../helpers/response")

const validatorJwt = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return response.error(req,res,"Invalid Token",400)
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);

    req.uid = payload.uid;
    req.name = poayload.name;
  } catch (e) {
    return response.error(req,res,"Contact admin")
  }

  next();
};

module.exports= validatorJwt;
