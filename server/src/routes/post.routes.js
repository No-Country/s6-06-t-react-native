const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const { post } = require("../controllers");



//crear post como usuario - validar si el post corresponde al usuario-validar JWT
router.post('/create/:channel', validatorJWT, post.createPost )
//editar post como usuario-isAdmin - validar si el post corresponde al usuario-validar JWT
router.put('/update/:id', isAdmin, validatorJWT, post.updatePost)
//borrar post como usuario-isAdmin  - validar si el post corresponde al usuario-validar JWT
router.put('/remove/:id', isAdmin, validatorJWT, post.PostsRemove)
//añadir a favorits


module.exports = router;

//DEBE CONTAR LA CANTIDA DE REACCIONES Y DEVOLVERLAS