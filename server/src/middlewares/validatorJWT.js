const jwt = require("jsonwebtoken");

const validatorJwt = (req, res, next) => {
  const token = req.header("x-token");

  if (!token) {
    return res.status(400).json({
      bad: "Invalid Token",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);

    req.uid = payload.uid;
    req.name = poayload.name;
  } catch (e) {
    return res.status(500).json({
      bad: "Contact admin",
    });
  }

  next();
};

module.exports= validatorJwt;
