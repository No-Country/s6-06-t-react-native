const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/newdb'

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', _ =>{
    console.log('Conectado a', uri)
})