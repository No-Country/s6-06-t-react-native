const response = require("../helpers/response");
const {User} = require('../models')

const isAdmin = async (req, res, next) => {
  const  uid  = req.uid;

  const user = await User.findById(uid)
  
  if (!user) {
    return response.error(req, res, "el usuario no existe", 400);
  }
  if (!user.admin){
    return response.error(req, res, "Forbbiden: dont have privilege", 403)
  }

  next();
};

module.exports = isAdmin;
