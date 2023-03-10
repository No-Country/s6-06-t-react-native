const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const generateJWT = require('../helpers/generateJWT');
const { User } = require('../models');
const sendEmail = require('../helpers/sendEmail');
const response = require('../helpers/response');
const { profileServices } = require('../services');

const getUser = async (req, res) => {
    try {
        const uid = req.uid;
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
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const remove = async (req, res) => {
    try {
        const uid = req.uid;
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
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const personal = async (req, res) => {
    try {
        const uid = req.uid;
        const body = req.body;

        const updatedUser = await profileServices.personal(uid, body);
        if (!updatedUser)
            return response.error(
                req,
                res,
                'There is a problem with the token provided',
                400
            );

        return response.success(req, res, 'Updated profile', updatedUser, 200);
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
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
//         return response.error(req, res, 'CONTACT ADMIN', 500);
//     }
// };

const applications = async (req, res) => {
    try {
        const uid = req.uid;
        const body = req.body;
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
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const postSaved = async (req, res) => {
    try {
        const uid = req.uid;
        const body = req.body;
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
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const profilePic = async (req, res) => {
    try {
        const { pic } = req.files;
        const uid = req.uid;
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
        return response.error(req, res, 'Contact Admin', 500);
    }
};

module.exports = {
    getUser,
    remove,
    personal,
    //professional,
    applications,
    postSaved,
    profilePic
};
