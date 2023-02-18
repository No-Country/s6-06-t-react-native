const { response } = require('../helpers');
const { User } = require('../models');

const editUser = async (req, res) => {
    const { id } = req.params;
    const { ...body } = req.body;
    try {
        const user = await User.findById(id);

        if (!user) {
            response.error(req, res, 'User not found', 400);
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { ...body },
            { new: true }
        );
        return response.success(req, res, 'Updated user', updatedUser, 200);
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Contact Admin', 500);
    }
};
const getAll = async (req, res) => {
    const { from, to } = req.query;

    try {
        const users = await User.find()
            .skip(Number(from))
            .limit(Number(to))
            .populate({
                path: 'favorites',
                select: 'title'
            })
            .populate({
                path: 'channels',
                select: 'name'
            })
            .populate({
                path: 'favorites',
                select: 'title'
            })
            .populate({
                path: 'postulations',
                select: 'title'
            });

        return response.success(req, res, 'All users :', users, 200);
    } catch (e) {
        console.log(e);
        return response.error(req, res, 'Contact  Admin', 500);
    }
};

const otherUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select(
            'fullName email isOnline img_avatar'
        );
        if (!user) {
            return response.error(req, res, 'User not found', 400);
        }

        return response.success(req, res, 'Other user', user, 200);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'Contact Admin', 500);
    }
};

module.exports = {
    editUser,
    getAll,
    otherUser
};
