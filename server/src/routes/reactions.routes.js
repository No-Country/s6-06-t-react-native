const express = require("express");
const router = express.Router();
const { reaction} = require("../controllers");
const { validatorJWT } = require("../middlewares");


//post recciona a post o comentario
router.post("/:scope/:id", validatorJWT, reaction.make)

//put modifica o quita reaccion  a post o comentario

module.exports = router;


