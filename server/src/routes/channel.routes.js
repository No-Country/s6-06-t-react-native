const express = require("express");
const router = express.Router();
const {channel} = require('../controllers');
const {isAdmin, validatorJWT}  = require('../middlewares');
const { verifyChannel } = require("../validations");

router.use(validatorJWT)

router.post("/new",  isAdmin, verifyChannel.create,  channel.createChannel)
      .put('/:id',  isAdmin,verifyChannel.edit, channel.updateChannel)
      .delete('/:id',  isAdmin,verifyChannel.remove, channel.deleteChannel)
      .get('/all', channel.getAllChannels)
      .get('/user',  channel.getUserChannels)
      .get('/:id', channel.getPostsChannel)

module.exports = router;

