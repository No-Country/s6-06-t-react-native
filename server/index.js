require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const app = express();
const {auth}=require("./src/routes")
require('./src/database/config.js');

const swaggerUI =require("swagger-ui-express");
const swaggerJsDoc =require("swagger-jsdoc");
const options=require("./src/config/swagger");
const specs = swaggerJsDoc(options);

app.set('view engine', 'handlebars')
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded())
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(__dirname + '/src/public'))
app.use("/api/auth",auth )
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

app.engine('handlebars', handlebars.engine({
layoutsDir: __dirname + '/src/views/layouts',
}));

app.listen(PORT , () =>{ 
    console.log(`Servidor corriendo en el Puerto: ${PORT}`)
});
