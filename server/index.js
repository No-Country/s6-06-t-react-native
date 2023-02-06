const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
require('./src/database/config.js');


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());



app.listen(PORT , () =>{ 
    console.log(`Servidor corriendo en el Puerto: ${PORT}`)
});





