const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { auth } = require("../controllers");
const { validateFields, validateLinkedin } = require("../middlewares");

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of user account
 *        name:
 *          type: string
 *          description: the name of the user
 *        email:
 *          type: string
 *          description: the email of the user account
 *        password:
 *          type: string
 *          description: the password of the user account
 *      required:
 *        - name
 *        - email
 *        - password
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: Michael
 *        email: foo@bar.com
 *    UserNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        msg: Task was not found
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users authentication endpoint
 */

/**
 * @swagger
 * api/auth/new:
 *  post:
 *    summary: register new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: the user account was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 *      400:
 *        description: Some server error
 *
 */

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

router.get("/linkedin/callback", validateLinkedin, auth.loginLinkedIn);


//añadi comprobacion de query params 
router.post("/request-reset-password",
[
  check("email", "name is required").isEmail(),
  validateFields,
], auth.resetPasswordRequest);

router.get("/reset-password", auth.renderRecoverPassword);

router.post(
  "/reset-password",
  [
    check("password", "password must have 6 or more characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  auth.resetPassword
);

module.exports = router;
