const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const { post } = require("../controllers");

router.use(validatorJWT)

router.post('/create/:channel',  post.createPost )
router.put('/update/:id', isAdmin,  post.updatePost)
router.put('/remove/:id', isAdmin,  post.PostsRemove)

//FALTA:añadir a favorits
router.put('/favorite/:id', post.postFavoriteUser)

//FALTA:Obtiene cometarios de post especifico con repliesy reacciones 

//FALTA:Obtiene todos los post -Paginado-ADMIN
router.get('/', isAdmin ,post.getAll)

module.exports = router;