const express = require("express");
const router = express.Router();
const {isAdmin, validatorJWT}  = require('../middlewares');
const {comment} = require('../controllers');

router.use(validatorJWT)

router.post('/new/:id/:place',  comment.createComment)
      .put('/edit/:id', comment.updateComment )
      .put('/delete/:id', comment.deleteComment)
      .delete('/:id',  isAdmin, comment.admDeleteComment)

module.exports = router;