const express = require("express");
const router = express.Router();
const channelController = require('../controllers/channel.controller');
const {isAdmin, validatorJWT} = require('../middlewares')

//crear canal
//is admin
router.post("/newchannel", isAdmin, validatorJWT, channelController.createChannel)




//editar canal
//isadmin

//eliminar canal
//isadmin

//get all channel > devuelve solo los nombres en los que el usuario esta participando -si es seleccionado devuelve requeriminetos

//obtener canal > devuelve toos los posteos del canal especificado



//get todos los canales creados 


