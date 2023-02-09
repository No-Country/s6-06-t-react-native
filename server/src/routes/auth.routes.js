const express = require("express");
const router = express.Router();
const { auth } = require("../controllers");
const { verifyAuth } = require("../validations");
const { validateLinkedin,validatorJWT } = require("../middlewares");

router.post("/new", verifyAuth.create, auth.createUser)
      .get("/validate-account", auth.validateAccount)
      .get("/resend-email",validatorJWT,auth.resendEmail)
      .post("/login", verifyAuth.login, auth.loginUser)
      .get("/linkedin", auth.generateLinkedinLink)
      .get("/linkedin/callback", validateLinkedin, auth.loginLinkedIn)
      .post("/request-reset-password",verifyAuth.resetPasswordRequest,auth.resetPasswordRequest)
      .get("/reset-password", auth.renderRecoverPassword)
      .post("/reset-password", verifyAuth.resetPassword, auth.resetPassword)

module.exports = router;
