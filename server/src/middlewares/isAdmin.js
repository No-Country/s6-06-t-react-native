const response = require("../helpers/response");

const isAdmin = (req, res, next) => {
  const { admin } = req.body;

  if (!admin) {
    response.error(req, res, "forbidden: admin access is required", 403);
  }

  next();
};

module.exports = isAdmin;
