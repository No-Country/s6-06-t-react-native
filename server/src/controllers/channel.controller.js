const  response  = require('../helpers/response');
const {Channel, User} = require('../models')


const createChannel = async (req,res) =>{
    const {name} = req.body
    const existingChannel = await Channel.findOne({name})
    if (existingChannel) {
        return response.error(req,res,"El Canal ya existe",409)
    }
    
    const channel = new Channel(req.body);
    await channel
        .save()
        .then((newChannel) => {
            return  response.success(req, res,"Canal creado exitosamente",newChannel,201)
        })
        .catch((error) => {
            console.log(error)
            return  response.error(req, res,error.message,500)
        })
};

const updateChannel = async (req, res) => {
    try {
        const { name, typechannel } = req.body;
        const updatedChannel = await Channel.findByIdAndUpdate(
            {_id: uid},
            { name, typechannel},
            {new: true}
        );
        if (!updatedChannel) {
            return res.status(404).json({
            success: false,
            error: `El canal no se ha encontrado`,
            });
        }
        res.status(200).json({
            success: true,
            data: updatedChannel,
        });
        } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
        }
}

const deleteChannel =  async (req , res) => {
    try {
        const channel = await Channel.findById({_id: uid});
        if (!channel) {
        return res.status(404).json({
        success: false,
        error: "Channel not found",
        });
        }
        await channel.remove();
        res.status(200).json({
        success: true,
        data: {},
        });
    } catch (error) {
        res.status(500).json({
        success: false,
        error: error.message,
        });
    }
};

const getAllChannels = async (req, res) => {

    try {
        const channels = await Channel.find();
        res.status(200).json({
            success: true,
            count: channels.length,
            data: channels
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const getUserChannels = async (req, res) => {
    
    try {
        const user = await User.findById({_id: uid}).populate("channels");

        if (!user) {
            return res.status(404).send({ error: "Usuario no encontrado" });
        }
        const channels = user.channels;
        const selected = user.selected;
    
        if (selected) {
            const requerimientosChannel = channels.find((channel) => channel.name === "requerimientos");
            if (requerimientosChannel) {channels.push(requerimientosChannel)}
        }
        return res.send({ channels });

        } catch (error) {
            console.error(error);
            return res.status(500).send({ error: "Ha ocurrido un error" });
        }
};

const getPostsChannel = async (req, res) => {
    const channelId = req.params.id;

    try {
        const channel = await Channel.findById(channelId).populate('posts');
        if (!channel) return res.status(404).send({ error: 'Canal no encontrado' });
        
        const posts = channel.posts;

        return res.status(200).send({ posts });
    } catch (error) {
        return res.status(500).send({ error: 'Error al obtener los posts del canal' });
    }
};


module.exports = {
    createChannel,
    updateChannel,
    deleteChannel,
    getUserChannels,
    getAllChannels,
    getPostsChannel
}