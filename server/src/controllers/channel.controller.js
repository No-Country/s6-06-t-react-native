const  response  = require('../helpers/response');
const {Channel, User} = require('../models')
const {validateDb} = require('../helpers')


const createChannel = async (req,res) =>{   
    const {id} = req.params
    const validate =  validateDb(id)
        if (!validate) {
            return response.error(req, res, "No valido")
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
    
    const {id} = req.params;
    console.log(id, "asdf")
    const {name, typechannel} = req.body
    
    try {
        const validate =  validateDb(id)
        if (!validate) {
            return response.error(req, res, "No valido")
        }
        console.log('llego')

        const updatedChannel = await Channel.findByIdAndUpdate(
            {_id: id},
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
    const {id} = req.params
    try {
        const channel = await Channel.findById({_id: id});
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
    const {id} = req.params
    try {
        const user = await User.findById(id).populate("channels");
        console.log(user, "aa")
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
    const {id} = req.params;

    try {
        const channel = await Channel.findById(id).populate('posts');
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