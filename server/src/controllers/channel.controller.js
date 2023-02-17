const response = require('../helpers/response');
const { Channel, User, Post, IsRead } = require('../models');

const reactions = ['megusta', 'meinteresa', 'apoyar', 'hacergracia'];

const createChannel = async (req, res) => {
    //TODO:AGREGAR USUARIOS SI ES PRIVADO O TODOS SI ES PUBLICO
    const channel = new Channel(req.body);
    await channel
        .save()
        .then((newChannel) => {
            return response.success(
                req,
                res,
                'Canal creado exitosamente',
                newChannel,
                201
            );
        })
        .catch((error) => {
            console.log(error);
            return response.error(req, res, error.message, 500);
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
        return response.error(req, res, error.message, 500);
    }
};

const deleteChannel = async (req, res) => {
    const { id } = req.params;
    try {
        const channel = await Channel.findById({ _id: id });
        if (!channel) {
            return res.status(404).json({
                success: false,
                error: 'Channel not found'
            });
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
        return response.success(req, res, 'Canal eliminado', {
            name: channel.name
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const getAllChannels = async (req, res) => {
    try {
        const channels = await Channel.find();

        const data = {
            count: channels.length,
            channels
        };

        return response.success(req, res, 'Canales encontrados', data, 200);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'dsd'
        });
    }
};

const getUserChannels = async (req, res) => {
    const uid = req.uid;
    try {
        const user = await User.findById(uid).populate('channels', 'name');
        if (!user) {
            return res.status(404).send({ error: 'Usuario no encontrado' });
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
        return response.success(req, res, 'Canales encontrados', channels, 200);
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

        if (!channel) response.error(req, res, 'Canal invalido', 400);
        const users = await User.find({ channels: id }).select('_id');
        const posts = await Post.find({ channel: id })
            .skip(Number(from))
            .limit(Number(to))

            .populate({
                path: 'author',
                select: 'fullName position isOnline img_avatar'
            })
            .populate('countComments')
            // .populate({ path: 'comments', select: 'body attached createdAt' })
            .populate('megusta')
            .populate('apoyar')
            .populate('meinteresa')
            .populate('hacergracia');
        //.populate({ path: 'reactions', select: 'type__Reaction -_id -post' })
        //const postsId=posts.map(a=>a.id)

        const readPost = await IsRead.find({ uid, doc: { $in: posts } }).select(
            'doc -_id'
        );

        return response.success(req, res, 'Posts de canal : ', {
            areRead: readPost,
            users,
            posts
        });
    } catch (error) {
        console.log(error);
        return response.error(
            req,
            res,
            'Error al obtener los posts del canal',
            500
        );
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
