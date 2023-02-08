const Channel = require('../models/Channel')


const createChannel = async (req,res) =>{
    const {name, typechannel} = req.body;
    const channel = new Channel({
        name,
        typechannel
    });
    channel
        .save()
        .then((newChannel) => {
            res.status(201).json({
                succes:true,
                data:newChannel
            });
        })
        .catch((error) => {
            res.status(500).json({
                succes: false,
                error: error.message
            })
        })
};

module.exports = createChannel