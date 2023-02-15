/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication endpoint
 */

/**
 * @swagger
 * /api/auth/new:
 *  post:
 *    summary: Register new user
 *    tags: [Auth]
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

/**
 * @swagger
 *  /api/auth/resend-email:
 *   get:
 *     parameters:
 *       - in: header
 *         name: x-token
 *         schema:
 *           type: string
 *
 *         required: true
 *         description: The token users account
 *
 *     summary: Re send the email to verify the account
 *     tags: [Auth]
 *
 *     responses:
 *       200:
 *         description: Email resend succesfully , check inbox
 * 
 *
 *        
 */

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Login a  user
 *    tags: [Auth]
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

/**
 * @swagger
 * /api/auth/renew:
 *  get:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *
 *        required: true
 *        description: The token users account
 *
 *    summary: Renew a token close to expiration
 *    tags: [Auth]
 *
 *    responses:
 *      200:
 *        description: Token generated succesfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                token:	dflkjhf4t89yurdtndrt895nf7yh895hg89jf89h7896j78967fj89mj768jf58967hn8967hn589nhg6
 *
 *
 *
 *
 */

/**
 * @swagger
 * /api/auth/linkedin:
 *  get:
 *    summary: Request the linkedin authentication page
 *    tags: [Auth]
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

/**
 * @swagger
 * /api/auth/linkedin/callback:
 *  get:
 *    summary: Get the user from a linkedin account
 *    tags: [SERVER]
 *
 *    responses:
 *      200:
 *        description: Logged with a prevoius account
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

/**
 * @swagger
 * /api/auth/request-reset-password:
 *  post:
 *    summary: Request a password reset
 *    tags: [Auth]
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

/**
 * @swagger
 * /api/auth/validate-account:
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
 *    summary: Validate the user account when is requested  -ONLY SERVER
 *    tags: [SERVER]
 *
 *    responses:
 *      200:
 *        description: Show a succes screen when the account is activated
 *
 *
 */

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
 *    summary: Render page for changue password -  ONLY FOR SERVER
 *    tags: [SERVER]
 *
 *    responses:
 *      200:
 *        description: Loads the page for password changue
 *
 *
 */

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
 *    tags: [SERVER]
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
