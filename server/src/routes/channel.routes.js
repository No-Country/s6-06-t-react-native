const express = require("express");
const router = express.Router();
const {channel} = require('../controllers');
const {isAdmin, validatorJWT} = require('../middlewares')

//crear canal
//is admin
router.post("/newchannel", isAdmin, validatorJWT, channel.createChannel)

//editar canal
//isadmin
router.put('/channel/:id', isAdmin, validatorJWT, channel.updateChannel)

//eliminar canal
//isadmin
router.delete('/channel/:id', isAdmin, validatorJWT, channel.deleteChannel)

//get all channel > devuelve solo los nombres en los que el usuario esta participando -si es seleccionado devuelve requeriminetos
router.get('./userchannel', channel.getUserChannels)

//obtener canal > devuelve toos los posteos del canal especificado
router.get('./postchannel', channel.getPostsChannel)

//get todos los canales creados 
router.get('./channels', channel.getAllChannels)

module.exports = router;

