const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const {user} = require('../controllers')


router.use(validatorJWT)
//put editar usuario como ADmin-Validar admin  LO PONE EN SELECCIONADO Y AGREGA CANAL REQUERIMEINTOS
router.put('/:id', isAdmin, user.editUser)
//get obtiene todos los usuarios con todo completo <<<<<<<<<-validar admin
router.get('/', isAdmin, user.getAll)
//get info de un usuario como otro usuario
router.get('/:id',  user.otherUser)

router.put('/favorite/:place/:id', user.favorite)



module.exports = router;