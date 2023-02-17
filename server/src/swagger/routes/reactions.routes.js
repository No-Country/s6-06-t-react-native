/**
 * @swagger
 * tags:
 *  name: Reactions
 *  description: Reactions endpoint.
 */

/**
 * @swagger
 * /api/reaction/{scope}/{id}:
 *  post:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *   
 *        required: true
 *        description: The token users account
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of post o comment  to  react
 * 
 *      - in: params
 *        name: scope
 *        schema:
 *          type: string
 *          enum: ["post","comment"]
 *        required: true
 *        description: Can be post or comment
 *    summary: Create a new reaction 
 *    tags: [Reactions]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *          schema:
 *            type: object
 *            example:
 *               "reaction": "meinteresa"
 *           
 *            
 *            
 *    responses:
 *      201:
 *        description: Reaction created successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Reaccion  exitosa
 *                data: 200
 *
 */
/**
 * @swagger
 * /api/reaction/{scope}/{id}:
 *  put:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *   
 *        required: true
 *        description: The token users account
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of post o comment  to remove react
 * 
 *      - in: params
 *        name: scope
 *        schema:
 *          type: string
 *          enum: ["post","comment"]
 *        required: true
 *        description: Can be post or comment
 *    summary: Remove a  reaction 
 *    tags: [Reactions]
 *    requestBody:
 *      required: true
 *      content:
 *       application/json:
 *          schema:
 *            type: object
 *            example:
 *               "reaction": "apoyar"
 *           
 *            
 *            
 *    responses:
 *      200:
 *        description: Reaccion eliminada con exito
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Reaccion eliminada con exito
 *                data: 200
 *
 */