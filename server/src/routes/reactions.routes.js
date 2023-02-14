const { reaction} = require("../controllers");
const { validatorJWT } = require("../middlewares");


//post recciona a post o comentario
router.post("/reaction/:id", validatorJWT, reaction.reactionToPost)

router.post("/reaction/:id", validatorJWT, reaction.reactionToComment)
//put modifica o quita reaccion  a post o comentario




