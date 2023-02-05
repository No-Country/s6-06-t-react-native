const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { auth } = require("../controllers");
const { validateFields,validateLinkedin } = require("../middlewares");


router.post(
  "/new",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "name is required").isEmail(),
    check("password", "password must have 6 or more characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  auth.createUser
);

router.post(
  "/login",
  [
    check("email", "name is required").isEmail(),
    check("password", "password must have 6 or more characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  auth.loginUser
);

router.get("/linkedin", (req, res) => {

  res.redirect(
    `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:5000/api/auth/linkedin/callback&state=${process.env.STATE}&scope=openid%20email%20profile`
  );
});

router.get("/linkedin/callback",validateLinkedin, auth.loginLinkedIn );

module.exports = router;
