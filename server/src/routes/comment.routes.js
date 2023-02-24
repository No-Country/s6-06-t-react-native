const express = require('express');
const router = express.Router();
const { isAdmin, validatorJWT } = require('../middlewares');
const { comment } = require('../controllers');
const { verifyComment } = require('../validations');

router.use(validatorJWT);

router
    .post('/new/:id/:place', verifyComment.create, comment.createComment)
    .put('/edit/:id', verifyComment.edit, comment.updateComment)
    .put('/delete/:id', verifyComment.remove, comment.deleteComment)
    .delete('/:id', verifyComment.remove, isAdmin, comment.admDeleteComment);

module.exports = router;
