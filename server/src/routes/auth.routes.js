const express = require("express");
const router = express.Router();
const { auth } = require("../controllers");
const { verifyAuth } = require("../validations");
const { validateLinkedin,validatorJWT } = require("../middlewares");

router.post("/new", verifyAuth.create, auth.createUser)
      .get("/validate-account",verifyAuth.validate, auth.validateAccount)
      .get("/resend-email",validatorJWT,auth.resendEmail)
      .post("/login", verifyAuth.login, auth.loginUser)
      .get("/renew",validatorJWT,auth.renewToken)
      .get("/linkedin", auth.generateLinkedinLink)//SE PODRIA OMITIR
      .get("/linkedin/callback", validateLinkedin, auth.loginLinkedIn)
      .post("/request-reset-password",verifyAuth.resetPasswordRequest,auth.resetPasswordRequest)
      .get("/reset-password", auth.renderRecoverPassword)
      .post("/reset-password", verifyAuth.resetPassword, auth.resetPassword)
      
module.exports = router;
