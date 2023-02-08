const express = require("express");
const router = express.Router();
const {channel} = require('../controllers');
const {isAdmin, validatorJWT}  = require('../middlewares')

//crear canal
//is admin
router.post("/new", validatorJWT, isAdmin,  channel.createChannel)

//editar canal 
//isadmin
router.put('/:id', isAdmin, validatorJWT, channel.updateChannel)

//eliminar canal
//isadmin
router.delete('/:id', isAdmin, validatorJWT, channel.deleteChannel)

//get all channel > devuelve solo los nombres en los que el usuario esta participando -si es seleccionado devuelve requeriminetos
router.get('./user', channel.getUserChannels)

//obtener canal > devuelve toos los posteos del canal especificado
router.get('./posts', channel.getPostsChannel)

//get todos los canales creados 
router.get('./', channel.getAllChannels)

module.exports = router;

