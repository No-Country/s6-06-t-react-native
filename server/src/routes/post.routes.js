const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const { post } = require("../controllers");

router.use(validatorJWT)

router.post('/new/:channel',  post.createPost )
router.put('/update/:id',  post.updatePost)
router.delete('/:id', isAdmin,  post.PostsRemove)
//router.put('/favorite/:id', post.postFavoriteUser)
router.get('/comments/:id', post.getComments)

router.get('/all', isAdmin ,post.getAll)

module.exports = router;