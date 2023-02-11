require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const handlebars = require('express-handlebars');
const {auth , channel, post ,comment}=require("./src/routes")
const swaggerUI =require("swagger-ui-express");
const specs=require("./src/swagger/config/config")
require('./src/database/config.js');
const PORT = process.env.PORT || 3001;

//SOCKET INTEGRATION WITH EXPRESS SERVER
const server =require("http").Server(app) 
const io = require('socket.io')(server)
const Sockets =require("./src/sockets/sockets") ;

app.set('view engine', 'handlebars')
app.set("views", "./src/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(__dirname + '/src/public'))
app.use("/api/auth",auth )
app.use("/api/post", post)
app.use("/api/channel", channel)
app.use("/api/comment", comment)
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


app.engine('handlebars', handlebars.engine({
layoutsDir: __dirname + '/src/views/layouts',
}));

//FOR GLOBAL ACCESS
Sockets(io);

//USE IN ROUTES
app.locals.io = io

server.listen(PORT , () =>{ 
    console.log(`Servidor corriendo en el : ${PORT}`)
});


