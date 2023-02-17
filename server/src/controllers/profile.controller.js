const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const generateJWT = require('../helpers/generateJWT');
const { User } = require('../models');
const response = require('../helpers/response');
const sendEmail = require('../helpers/sendEmail');
const { profileServices } = require('../services');



const getUser = async (req, res) => {
    const uid = req.uid;

    try {
        const user = await profileServices.get(uid);

        if (user === 'error')
            response.error(
                req,
                res,
                'There is a problem with de provided uid',
                400
            );

        return response.success(req, res, 'User found', user, 200);
    } catch (e) {
        console.log(e);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

// const updateUser = (req, res) => {
//   const uid = req.uid;
//   const { scope } = req.params;

//   switch (scope) {
//     case value:
//       "delete";
//       return profileServices.delete(req, res, uid);
//     case value:
//       "personal";
//       return profileServices.personal(req, res, uid);
//     case value:
//       "professional";
//       return profileServices.professional(req, res, uid);
//     case value:
//       "professional";
//       return profileServices.aplicattions(req, res, uid);
//     case value:
//       "professional";
//       return profileServices.saved(req, res, uid);
//     case value:
//       "professional";
//       return profileServices.profilePic(req, res, uid);
//     default:
//       return profileServices.error(req, res, uid);
//   }
// };

const remove = async (req, res) => {
    const uid = req.uid;

    try {
        const removed = await profileServices.remove(uid);

        if (!removed)
            return response.error(
                req,
                res,
                'There is a problem with the token provided',
                400
            );

        return response.success(req, res, 'Account deleted', removed.id, 200);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

const personal = async (req, res) => {
    const uid = req.uid;
    const body = req.body;
    try {
        const updatedUser =await profileServices.personal(uid, body);

        if (!updatedUser)
            return response.error(
                req,
                res,
                'There is a problem with the token provided',
                400
            );

        return response.success(req, res, 'Updated profile', updatedUser, 200);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

// const professional = async (req, res) => {
//     const uid = req.uid;
//     const body = req.body;
//     try {
//         const updatedUser =await profileServices.professional(uid, body);

//         if (!updatedUser)
//             return response.error(
//                 req,
//                 res,
//                 'There is a problem with the token provided',
//                 400
//             );

//         return response.success(req, res, 'Updated profile', updatedUser, 200);
//     } catch (error) {
//         console.log(error);
//         return response.error(req, res, 'CONTACT ADMIN', 500);
//     }
// };

const applications = async (req, res) => {
    const uid = req.uid;
    const body = req.body;
    try {
        const updatedUser = await profileServices.applications(uid, body);
        

        if (!updatedUser)
            return response.error(
                req,
                res,
                'There is a problem with the token provided',
                400
            );

        return response.success(req, res, 'Updated profile', updatedUser, 200);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

const postSaved = async (req, res) => {
    const uid = req.uid;
    const body = req.body;
    try {
        const updatedUser = await profileServices.savedPost(uid, body);

        if (!updatedUser)
            return response.error(
                req,
                res,
                'There is a problem with the token provided',
                400
            );

        return response.success(req, res, 'Updated profile', updatedUser, 200);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

const profilePic = async (req, res) => {
    //console.log(req.files);
    const { pic } = req.files;
    const uid = req.uid;

    try {
        const updatedUser = await profileServices.profilePic(uid, pic);

        if (!updatedUser)
            return response.error(
                req,
                res,
                'There is a problem with the token provided',
                400
            );

        return response.success(
            req,
            res,
            'Updated profile pic',
            updatedUser,
            200
        );
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

module.exports = {
    getUser,
    //updateUser,
    remove,
    personal,
    //professional,
    applications,
    postSaved,
    profilePic
};
