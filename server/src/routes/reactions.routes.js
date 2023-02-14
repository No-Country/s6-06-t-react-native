const express = require("express");
const router = express.Router();
const { reaction} = require("../controllers");
const { validatorJWT } = require("../middlewares");

router.use(validatorJWT)
router.post("/:scope/:id",  reaction.make)
      .put("/:scope/:id",  reaction.remove)

module.exports = router;


