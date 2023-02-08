const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const { auth } = require("../controllers");
const { validateFields, validateLinkedin ,validatePassword} = require("../middlewares");

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users authentication endpoint
 */

/**
 * @swagger
 * /api/auth/new:
 *  post:
 *    summary: Register new user
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
 *              $ref: '#/components/schemas/Response'
 *
 */

router.post("/new",
  [
    check("fullName", "fullName is required").not().isEmpty(),
    check("email", "name is required").isEmail(),
    check("password", "password must have 6 or more characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  auth.createUser
);


/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Login a  user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: the user was logged successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 *
 */

router.post("/login",
  [
    check("email", "name is required").isEmail(),
    check("password", "password must have 6 or more characters").isLength({
      min: 6,
    }),
    validateFields,
  ],
  auth.loginUser
);

/**
 * @swagger
 * /api/auth/linkedin:
 *  get:
 *    summary: Request the linkedin authentication page
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: get the url  to linkedin login page with server generated configuration
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:        
 *                msg:	Open the link in the browser
 *                data: {url: https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=somethig&redirect_uri=http://localhost:5000/api/auth/linkedin/callback&state=somethig&scope=openid%20email%20profile}
 *                  
 *
 */

router.get("/linkedin", auth.generateLinkedinLink);


/**
 * @swagger
 * /api/auth/linkedin/callback:
 *  get:
 *    summary: Get the user from a linkedin account
 *    tags: [Users]
 *   
 *    responses:
 *      200:
 *        description: logged with a prevoius account
 *        content:
 *          application/json:
 *            schema:
 *               $ref: '#/components/schemas/Response'
 *                 
 *      201:
 *        description: Create a new account
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Response'
 *
 */

router.get("/linkedin/callback", validateLinkedin, auth.loginLinkedIn);

/**
 * @swagger
 * /api/auth/request-reset-password:
 *  post:
 *    summary: Request a password reset
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              email: foo@bar.com
 *    responses:
 *      200:
 *        description: Request for Password reset was succesfull
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Request for Password reset was succesfull
 *                data: http://localhost:5000/api/auth/reset-password?token=fa95483efa67bfe3cfcfb683370536c33587ceb7c8c2f8855873c66160b05d82&uid=63e40fe2aa7f165c18c0520b
 * 
 *
 */
router.post("/request-reset-password",
[
  check("email", "name is required").isEmail(),
  validateFields,
], auth.resetPasswordRequest);

/**
 * @swagger
 * /api/auth/reset-password :
 *  get:
 *    parameters:
 *      - in: query
 *        name: token
 *        schema:
 *          type: string
 *         
 *        required: true
 *        description: The user token from current session
 *      - in: query
 *        name: uid
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    summary: Render page for input new password -  ONLY FOR SERVER
 *    tags: [Users]
 *    
 *    responses:
 *      200:
 *        description: Loads the page for password changue
 *        
 *
 */
router.get("/reset-password", auth.renderRecoverPassword);

/**
 * @swagger
 * api/auth/reset-password:
 *  post:
 *    parameters:
 *      - in: query
 *        name: token
 *        schema:
 *          type: string
 *        required: true
 *        description: The user token from current session
 *      - in: query
 *        name: uid
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    summary: Validates entered passwords and saves to DB- ONLY SERVER
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              password: foobar
 *    responses:
 *      200:
 *        description: The password was updated and redirect to succes page
 *        
 *
 */
router.post( "/reset-password",
  [
    check("password", "password must have 6 or more characters").isLength({
      min: 6,
    }),
    validatePassword,
    validateFields,
  ],
  auth.resetPassword
);

module.exports = router;
