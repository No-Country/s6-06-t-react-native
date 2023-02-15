const { updateIMG } = require("../helpers/cloudinary");
const { User } = require("../models");

const get=async(uid)=>{
  const user = await User.findById(uid).populate("favorites").populate("postulations")

  if (!user) return "error"
const {password:_ ,...userData}=user.toJSON()
    return userData
}

const remove = async (uid) => {
  const user = await User.findById(uid);
  user.active = false;
  return await user.save();
};

const personal = async (uid, body) => {
  const { password,active,admin,selected,emailisvalidated,favorites,channels,postulations,...other } = body; //Para password una ruta distinta ya que el cliente no va a tener esa informarcaion para mandarla x body

  const user = await User.findByIdAndUpdate(uid,{...other},{new:true});//?:VOLVER A VERIFICAR EMAIL?
  // if (fullName) user.fullName = fullName;
  // if (email) user.email = email; 
  // if (phone) user.phone = phone;

  return  user
};

const professional = async (uid, body) => {
  const { availability, technologies, educationalLevel, position, jobTitle } =
    body;

  const user = await User.findById(uid);
  if (availability) user.availability = availability;
  if (technologies) user.technologies = technologies;
  if (educationalLevel) user.educationalLevel = educationalLevel;
  if (position) user.position = position;
  if (jobTitle) user.jobTitle = jobTitle;

  return await user.save();
};

const applications = async (uid, body) => {
  const { remove } = body; //cliente deberia enviar un array con los id de las ofertas a "despostularse"

  const user = await User.findById(uid);

  const newList = user.postulations.filter((jobOffer) => {
    return remove.indexOf(jobOffer.toHexString()) == -1;
  });

  user.postulations = newList;

  return await user.save();
};

const savedPost = async (uid, body) => {
  const { remove } = body; //cliente deberia enviar un array con los post a sacar de favorito

  const user = await User.findById(uid);

  const newList = user.favorites.filter((post) => {
    return remove.indexOf(post.toHexString()) == -1;
  });

  user.favorites = newList;

  return await user.save();
};

const profilePic = async (uid, file) => {
  const user = await User.findById(uid);

  const updatedUser = await updateIMG(user, file);

  return await updatedUser.save();
};

module.exports = {
  get,
  remove,
  personal,
  professional,
  applications,
  savedPost,
  profilePic,
};
