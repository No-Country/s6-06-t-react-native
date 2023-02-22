const express = require("express");
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares')
const {user} = require('../controllers')
const { verifyUser } = require('../validations')



router.use(validatorJWT)
router.put('/:id', verifyUser.edit, isAdmin, user.editUser)
    .get('/all',  isAdmin, user.getAll)
    .get('/:id', verifyUser.getByIdUser, user.otherUser)
    .delete("/:id", verifyUser.remove,isAdmin,user.deleteOne)
    .put('/favorite/:place/:id', user.favorite)



module.exports = router;