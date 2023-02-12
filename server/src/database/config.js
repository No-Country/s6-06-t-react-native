const mongoose = require('mongoose');
require('dotenv').config
const uri = process.env.URLDB || 'mongodb://mongo/newdb'
const { Channel } = require('../models');

mongoose.set("strictQuery", false)

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () =>{
    console.log('Conectado a', uri)

    const defaultChannels=["General","Requerimientos"]

    defaultChannels.forEach(async(channel)=>{

        const isChannel=await Channel.findOne({name:channel})

    if(!isChannel) {
        const newChannel=new Channel({
            name:channel
        })
    
        await newChannel.save()
    }


    })

})



