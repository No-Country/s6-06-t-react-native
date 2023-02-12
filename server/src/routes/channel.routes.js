const express = require("express");
const router = express.Router();
const {channel} = require('../controllers');
const {isAdmin, validatorJWT}  = require('../middlewares');
const { verifyChannel } = require("../validations");

//crear canal
//is admin

router.post("/new",validatorJWT,  isAdmin, verifyChannel.create,  channel.createChannel)

//editar canal 
//isadmin
router.put('/:id',validatorJWT , isAdmin,verifyChannel.edit, channel.updateChannel)

//eliminar canal
//isadmin
////TAL VEZ  MODIFICAR LA PROP ACTIVE Y NO ELIMINAR?
router.delete('/:id',validatorJWT,  isAdmin,verifyChannel.remove, channel.deleteChannel)
//get todos los canales creados 
//PARA ADMIN?//paginar
router.get('/all',validatorJWT, channel.getAllChannels)
//get all channel > devuelve solo los nombres en los que el usuario esta participando -si es seleccionado devuelve requeriminetos
//SE PODRIA USAR EL UID QUE PROVIENE DEL REQ
router.get('/user',validatorJWT,  channel.getUserChannels)

//obtener canal > devuelve el canal con los posteos populados
//PAGINADO
router.get('/:id',validatorJWT, channel.getPostsChannel)



module.exports = router;

