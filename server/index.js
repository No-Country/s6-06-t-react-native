require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 3001;
const app = express();
const {auth , channel, post ,comment}=require("./src/routes")
require('./src/database/config.js');

const server =require("http").Server(app) 
const io = require('socket.io')(server)
const Sockets =require("./src/sockets/sockets") ;





const swaggerUI =require("swagger-ui-express");
const specs=require("./src/swagger/config/config")

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



console.log(`Servidor corriendo en el : ${PORT}`);

Sockets(io);


server.listen(PORT , () =>{ 
    console.log(`Servidor corriendo en el : ${PORT}`)
});
app.locals.io = io