const express = require("express");
const router = express.Router();
const {channel} = require('../controllers');
const {isAdmin, validatorJWT}  = require('../middlewares')
// const {validateDb} = require('../helpers')
// const {check} = require('express-validator')
// const {channel: modelChannel} = require('../models')

//crear canal
//is admin
router.post("/new", validatorJWT, isAdmin, channel.createChannel)

//editar canal 
//isadmin
router.put('/:id', validatorJWT, isAdmin, channel.updateChannel)

//eliminar canal
//isadmin
router.delete('/:id', validatorJWT, isAdmin, channel.deleteChannel)

//get all channel > devuelve solo los nombres en los que el usuario esta participando -si es seleccionado devuelve requeriminetos
router.get('/user/:id', validatorJWT, channel.getUserChannels)

//obtener canal > devuelve toos los posteos del canal especificado
router.get('/posts/:id', channel.getPostsChannel)

//get todos los canales creados 
router.get('/all', channel.getAllChannels)

module.exports = router;

