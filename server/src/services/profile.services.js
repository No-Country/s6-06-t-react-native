const { handleEmailToken } = require('../helpers');
const { updateIMG } = require('../helpers/cloudinary');
const { User } = require('../models');

const validateLink = `${process.env.URL}/api/auth/validate-account`;
const validateTemplate = {
    title: 'Vefify Email',
    path: './template/accountVerification.handlebars'
};

const get = async (uid) => {
    const user = await User.findById(uid);
    // .populate("favorites").populate("postulations")

    if (!user) return 'error';
    const { password: _, ...userData } = user.toJSON();
    return userData;
};

const remove = async (uid) => {
    const user = await User.findById(uid);
    user.active = false;
    return await user.save();
};

const personal = async (uid, body) => {
    const {
        password,
        active,
        admin,
        selected,
        emailisvalidated,
        favorites,
        channels,
        postulations,
        email,
        ...other
    } = body;







    const isEmail = email
        ? {
              ...other,
              email,
              emailisvalidated: false
          }
        : { ...other };

    const user = await User.findByIdAndUpdate(uid, isEmail, { new: true }); //DEBEN HACER LOGOUT SI CAMBIAN EL EMAIL , VERIFICARLO X EMAIL VOLVER A LOGUEARSE

    handleEmailToken(user, validateLink, validateTemplate);

    return user;
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
    console.log(remove, newList);
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
    profilePic
};
