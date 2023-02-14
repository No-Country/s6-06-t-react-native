const express = require("express");
const router = express.Router();
const { profile } = require("../controllers");
const { validatorJWT } = require("../middlewares");

router.use(validatorJWT)
//PAGINAR POST QUE CREO O COMENTARIOS Y ACTUALIZAR CAMPOS DE FRONT
router.get("/",  profile.getUser)
      //.put("/edit/:scope",  profile.updateUser)  
      .put("/edit/remove",  profile.remove)
      .put("/edit/personal",  profile.personal)
      .put("/edit/professional",  profile.professional)
      .put("/edit/applications",  profile.applications)
      .put("/edit/post-saved",  profile.postSaved)
      .put("/edit/profile-pic",  profile.profilePic)

module.exports = router;









