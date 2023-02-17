const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const { post } = require("../controllers");

router.use(validatorJWT)

router.post('/create/:channel',  post.createPost )
router.put('/update/:id', isAdmin,  post.updatePost)
router.delete('/remove/:id', isAdmin,  post.PostsRemove)
router.put('/favorite/:id', post.postFavoriteUser)
router.get('/comments/:id', post.getComments)

router.get('/', isAdmin ,post.getAll)

module.exports = router;