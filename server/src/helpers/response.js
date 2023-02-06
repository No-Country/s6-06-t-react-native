const success = (req, res, message, data = {}, status = 200) => {
  res.status(status).send({
    msg: message,
    data: data,
  });
};
const error = (req, res, message, status = 500) => {
  res.status(status).send({
    error: message,
  });
};
module.exports = {
  success,
  error,
};
