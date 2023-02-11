
const express = require("express");
const {validatorJWT} = require('../middlewares')

// const { check } = require("express-validator");
const router = express.Router();
const { post } = require("../controllers"             );
// const { validateFields, validateLinkedin, validatePassword } = require("../middlewares");

//crear post como usuario - validar si el post corresponde al usuario-validar JWT
router.post('/create/:channel', validatorJWT, post.createPost )
//editar post como usuario - validar si el post corresponde al usuario-validar JWT

//borrar post como usuario  - validar si el post corresponde al usuario-validar JWT



//editar cualquier post como admin -validar admin-validar JWT

//borrar  cualquier post como admin  -validar admin-validar JWT




//reaccion a post
router.post("/reaction/:id",validatorJWT, post.reactionToPost)


module.exports = router;