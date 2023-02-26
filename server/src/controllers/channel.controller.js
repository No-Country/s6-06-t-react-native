const response = require('../helpers/response');
const { Channel, User, Post, IsRead } = require('../models');

const createChannel = async (req, res) => {
    //TODO:AGREGAR USUARIOS SI ES PRIVADO O TODOS SI ES PUBLICO
    try {
        const channel = new Channel(req.body);
        await channel.save().then((newChannel) => {
            return response.success(
                req,
                res,
                'Channel created successfully',
                newChannel,
                201
            );
        });
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const updateChannel = async (req, res) => {
    const { id } = req.params;
    const { name, typechannel, active } = req.body;

    try {
        const updatedChannel = await Channel.findByIdAndUpdate(
            { _id: id },
            { name, typechannel, active },
            { new: true }
        );
        if (!updatedChannel) {
            return response.error(
                req,
                res,
                'Channel not found',
                updatedChannel,
                404
            );
        }
        return response.success(
            req,
            res,
            'Updated channel',
            updatedChannel,
            200
        );
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const deleteChannel = async (req, res) => {
    const { id } = req.params;
    try {
        const channel = await Channel.findById({ _id: id });
        if (!channel) {
            return response.error(req, res, 'Channel not found', 404);
        }
        await Post.deleteMany({ channel: channel.id });
        await channel.remove();
        return response.success(req, res, 'Channel removed successfully', {
            name: channel.name
        });
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const getAllChannels = async (req, res) => {
    const { from, to, filter } = req.query;
    const regex = { $regex: filter, $options: 'i' };
    const query = {
        $or: [{ name: regex }, { typechannel: regex }]
    };
    try {
        const channels = await Channel.find(filter ? query : {});

        const data = {
            count: channels.length,
            channels
        };
        res.set('Content-Range', channels.length);
        return response.success(
            req,
            res,
            'Channels found successfully',
            data,
            200
        );
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const getUserChannels = async (req, res) => {
    const uid = req.uid;
    try {
        const user = await User.findById(uid).populate('channels', 'name');
        if (!user) {
            return response.error(req, res, 'User not found', 404);
        }
        return response.success(
            req,
            res,
            'Channels found successfully',
            user.channels,
            200
        );
    } catch (error) {
        console.error(error);
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const getPostsChannel = async (req, res) => {
    const { uid } = req;
    const { from, to } = req.query;
    const { id } = req.params;

    try {
        const channel = await Channel.findById(id);

        if (!channel) response.error(req, res, 'invalid channel', 400);
        const users = await User.find({ channels: id }).select('_id');
        const posts = await Post.find({ channel: id })
            .sort({ createdAt: -1 })
            .skip(Number(from))
            .limit(Number(to))
            .populate({
                path: 'author',
                select: 'fullName position isOnline img_avatar'
            })
            .populate({
                path: 'comments',
                select: 'body active attached createdAt updatedAt',
                populate: {
                    path: 'author',
                    select: 'fullName img_avatar _id'
                }
            })
            .populate('countComments')
            .populate('megusta', 'user -post -_id')
            .populate('apoyar', 'user -post -_id')
            .populate('meinteresa', 'user -post -_id')
            .populate('hacergracia', 'user -post -_id');

        const readPost = await IsRead.find({ uid, doc: { $in: posts } }).select(
            'doc -_id'
        );

        return response.success(req, res, 'Channel post:', {
            areRead: readPost,
            users,
            posts
        });
    } catch (error) {
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

module.exports = {
    createChannel,
    updateChannel,
    deleteChannel,
    getUserChannels,
    getAllChannels,
    getPostsChannel
};
