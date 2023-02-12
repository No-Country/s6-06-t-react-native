
const express = require("express");
const {validatorJWT} = require('../middlewares')

// const { check } = require("express-validator");
const router = express.Router();
const { post } = require("../controllers"             );
// const { validateFields, validateLinkedin, validatePassword } = require("../middlewares");

//crear post como usuario - validar si el post corresponde al usuario-validar JWT
router.post('/create/:channel', validatorJWT, post.createPost )
//editar post como usuario - validar si el post corresponde al usuario-validar JWT
router.put('/update/:id',  post.updatePost)
//borrar post como usuario  - validar si el post corresponde al usuario-validar JWT

//añadir a favorits

//editar cualquier post como admin -validar admin-validar JWT

//borrar  cualquier post como admin  -validar admin-validar JWT



///MOVER A OTRA RUTA
//reaccion a post
router.post("/reaction/:id",validatorJWT, post.reactionToPost)


module.exports = router;

//DEBE CONTAR LA CANTIDA DE REACCIONES Y DEVOLVERLAS