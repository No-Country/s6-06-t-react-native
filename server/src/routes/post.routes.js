const express = require("express");
const router = express.Router();
const { validatorJWT, isAdmin } = require('../middlewares')
const { post } = require("../controllers");
const { verifyPost } = require("../validations")


router.use(validatorJWT)
router.post('/new/:channel', verifyPost.create, post.createPost)
    .put('/update/:id', verifyPost.edit, post.updatePost)
    .delete('/:id', isAdmin, verifyPost.remove, post.PostsRemove)
    .get('/comments/:id', post.getComments)
    .get('/all', isAdmin, post.getAll)
  //.put('/favorite/:id', post.postFavoriteUser)


module.exports = router;