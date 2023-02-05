const mongoose = require('mongoose');
const uri = 'mongodb://mongo/newdb'

mongoose.set("strictQuery", false)

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', _ =>{
    console.log('Conectado a', uri)
})