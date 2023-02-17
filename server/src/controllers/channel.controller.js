const response = require('../helpers/response');
const { Channel, User, Post, IsRead } = require('../models');

const createChannel = async (req, res) => {
    //TODO:AGREGAR USUARIOS SI ES PRIVADO O TODOS SI ES PUBLICO
    const channel = new Channel(req.body);
    await channel
        .save()
        .then((newChannel) => {
            return response.success(
                req,
                res,
                'Channel created successfully',
                newChannel,
                201
            );
        })
        .catch((error) => {
            console.log(error);
            return response.error(req, res, 'CONTACT ADMIN', 500);
        });
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
                'Canal no encontrado',
                updatedChannel,
                404
            );
        }
        return response.success(
            req,
            res,
            'Canal actualizado',
            updatedChannel,
            200
        );
    } catch (error) {
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

const deleteChannel = async (req, res) => {
    const { id } = req.params;
    try {
        const channel = await Channel.findById({ _id: id });
        if (!channel) {
            return response.error(req, res, 'Channel not found', 404);
        }

        //PROBAR SI FUNCIONA !!!
        await Post.deleteMany({ channel: channel.id });
        await User.updateMany(
            { channels: channel.id },
            {
                $pop: {
                    channels: channel.id
                }
            }
        );

        await channel.remove();
        return response.success(req, res, 'Channel removed successfully', {
            name: channel.name
        });
    } catch (error) {
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

const getAllChannels = async (req, res) => {
    try {
        const channels = await Channel.find();

        const data = {
            count: channels.length,
            channels
        };

        return response.success(
            req,
            res,
            'Channels found successfully',
            data,
            200
        );
    } catch (error) {
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

const getUserChannels = async (req, res) => {
    const uid = req.uid;
    try {
        const user = await User.findById(uid).populate('channels', 'name');
        if (!user) {
            return response.error(req, res, 'User not found', 404);
        }
        const channels = user.channels;
        const selected = user.selected;
        //// RARO
        if (selected) {
            const requerimientosChannel = channels.find(
                (channel) => channel.name === 'requerimientos'
            );
            if (requerimientosChannel) {
                channels.push(requerimientosChannel);
            }
        }

        /////
        return response.success(
            req,
            res,
            'Channels found successfully',
            channels,
            200
        );
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Ha ocurrido un error' });
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
            .skip(Number(from))
            .limit(Number(to))

            .populate({
                path: 'author',
                select: 'fullName position isOnline img_avatar'
            })
            .populate('countComments')
            .populate('megusta')
            .populate('apoyar')
            .populate('meinteresa')
            .populate('hacergracia');

        const readPost = await IsRead.find({ uid, doc: { $in: posts } }).select(
            'doc -_id'
        );

        return response.success(req, res, 'Channel post:', {areRead: readPost,users,posts});
    } catch (error) {
        console.log(error);
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
