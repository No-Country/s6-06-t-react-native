const mongoose = require('mongoose');
const uri = 'mongodb://mongo/newdb'

mongoose.connect(uri,{
    useNewUrlParser: false,
    useUnifiedTopology: true
});

mongoose.connection.on('open', _ =>{
    console.log('Conectado a ', uri)
})