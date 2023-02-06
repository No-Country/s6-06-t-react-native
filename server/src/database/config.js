const mongoose = require('mongoose');
const uri = process.env.DB || 'mongodb://mongo/newdb'

mongoose.set("strictQuery", false)

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', _ =>{
    console.log('Conectado a', uri)
})