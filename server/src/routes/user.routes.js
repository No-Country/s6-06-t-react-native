const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const {user} = require('../controllers')

//put editar usuario como ADmin-Validar admin  LO PONE EN SELECCIONADO Y AGREGA CANAL REQUERIMEINTOS
router.put('/updateuser/:id',validatorJWT, isAdmin, user.editUser)
//get obtiene todos los usuarios con todo completo <<<<<<<<<-validar admin
router.get('/',validatorJWT, isAdmin, user.getAll)
//get info de un usuario como otro usuario
router.get('/:id', validatorJWT, user.otherUser)



module.exports = router;