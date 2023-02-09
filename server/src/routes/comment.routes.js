const express = require("express");
const router = express.Router();
// const {Comment} = require('../models')
const {isAdmin, validatorJWT}  = require('../middlewares');
const {comment} = require('../controllers');



//post crear cometario -validar jwt (!!!!comentarios anidados-charlarcon front)
router.post('/new', validatorJWT, comment.createComment)


//put editar comentario--validar jwt -validar si es propio del usuario
router.put('/edit/:id',validatorJWT, comment.updateComment )

//delete borrar comentario--validar jwt -validar si es propio del usuario
router.delete('/delete/:id', validatorJWT, comment.deleteComment)

//borrar  cualquier cometario como admin  -validar admin-validar JWT-validar is admin
router.delete('/admdelete/:id', validatorJWT, isAdmin, comment.admDeleteComment)


module.exports = router;