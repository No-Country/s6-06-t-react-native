const response=require("../helpers/response")

const validateLinkedin = (req, res, next) => {
  const { state, error } = req.query;

  if (error) {
    return response.error(req, res, error);
  }

  if (state !== process.env.STATE) {
    return response.error(req, res, "Unauthorized", 401);
  }

  next();
};

module.exports = validateLinkedin;
