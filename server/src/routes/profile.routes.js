const express = require("express");
const router = express.Router();
const { profile } = require("../controllers");
const { verifyProfile } = require("../validations");
const { validatorJWT } = require("../middlewares");


// get obtiene toda la info del propio usuario  
router.get("/",validatorJWT,  profile.getUser)

      
      .put("/edit/:section", validatorJWT, profile.updateUser)

//put actualiza datos perosnales
//put actualiza datos profesionales

//put modifica postulaciones

//put actualiza post guardados 

//put actualiza foto de perfil
      
module.exports = router;









