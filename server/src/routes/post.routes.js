const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const { post } = require("../controllers");

router.use(validatorJWT)

router.post('/create/:channel',  post.createPost )
//FALTA:SI ES ADMIN PUEDE HACERLO EN CUALQUIERA
router.put('/update/:id', isAdmin,  post.updatePost)
//FALTA:SI ES ADMIN PUEDE HACERLO EN CUALQUIERA
router.put('/remove/:id', isAdmin,  post.PostsRemove)
//FALTA:añadir a favorits

//FALTA:Obtiene cometarios de post especifico con repliesy reacciones 


module.exports = router;