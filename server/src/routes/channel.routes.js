const express = require("express");
const router = express.Router();
const {channel} = require('../controllers');
const {isAdmin, validatorJWT}  = require('../middlewares')

//crear canal
//is admin
router.use(validatorJWT)

router.post("/new",  isAdmin, channel.createChannel)

//editar canal 
//isadmin
router.put('/:id',  isAdmin, channel.updateChannel)

//eliminar canal
//isadmin
router.delete('/:id',  isAdmin, channel.deleteChannel)

//get all channel > devuelve solo los nombres en los que el usuario esta participando -si es seleccionado devuelve requeriminetos
router.get('/user/:id',  channel.getUserChannels)

//obtener canal > devuelve toos los posteos del canal especificado
router.get('/posts/:id', channel.getPostsChannel)

//get todos los canales creados 
//PARA ADMIN?
router.get('/all', channel.getAllChannels)

module.exports = router;

