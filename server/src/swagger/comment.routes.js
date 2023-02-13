/**
 * @swagger
 * tags:
 *  name: Comments
 *  description: Comments endpoint.
 */

/**
 * @swagger
 * /api/comment/new/:id/:scope:
 *  post:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: The mongo id of the document where will make a comment
 * 
 *      - in: params
 *        name: scope
 *        schema:
 *          type: string
 *          "enum": [ "job-offer", "post","comment"]
 *        required: true
 *        description: The place where will make a comment
 *    summary: Create a new comment is specific post, job offer or reply another comment
 *    tags: [Comments]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *               "body": "Hola"
 *               
 *    responses:
 *      201:
 *        description: Comentario creado con éxito
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Comentario creado con éxito
 *                data: { 
 *                  "author": "63e5b75334de3305d0198a5f",
 *                  "body": "Hola",
 *                  "post": "63e64162b4895ce97338ca7d",
 *                  "active": true,
 *                  "attached": [],
 *                  "createdAt": "2023-02-10T18:12:02.770Z",
 *                  "updatedAt": "2023-02-10T18:12:02.770Z",
 *                  "id": "63e688f24430ed2e2f43508f" }
 *
 */



/**
 * @swagger
 * /api/comment/edit/{id}:
 *  put:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of comment to update
 *    summary: Edit a comment  made by the logged user
 *    tags: [Comments]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              body: Me equivoque,
 *              
 *    responses:
 *      201:
 *        description: comentario modificado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: comentario modificado exitosamente
 *                data: { 
 *                 "author": "63e5b75334de3305d0198a5f",
 *                 "body": "me equivoque",
 *                 "post": "63e64162b4895ce97338ca7d",
 *                 "active": true,
 *                 "attached": [],
 *                 "createdAt": "2023-02-11T00:00:20.105Z",
 *                 "updatedAt": "2023-02-11T00:00:30.784Z",
 *                 "id": "63e6da94fad021aab55a1bf2"
 *                   }
 *
 */

/**
 * @swagger
 * /api/comment/delete/{id}:
 *  put:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of comment to delete
 *    summary: Delete  comment  made by the logged user
 *    tags: [Comments]
 *    
 *              
 *    responses:
 *      200:
 *        description: Comentario eliminado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Comentario eliminado exitosamente
 *                
 *
 */

/**
 * @swagger
 * /api/comment/admdelete/{id}:
 *  put:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of comment to delete
 *    summary: Delete any comment  -Only for admin
 *    tags: [Comments]
 *    
 *              
 *    responses:
 *      200:
 *        description: Comentario eliminado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Comentario eliminado exitosamente
 *                
 *
 */


// /**
//  * @swagger
//  * /api/comment/reply/new/{id}:
//  *  post:
//  *    parameters:
//  *      - in: header
//  *        name: x-token
//  *        schema:
//  *          type: string
//  *          format: uuid
//  *        required: true
//  *        description: The token users account
//  *      - in: params
//  *        name: id
//  *        schema:
//  *          type: string
//  *          format: id
//  *        required: true
//  *        description: The id of the comment to reply
//  *    summary: Create a new reply to specific comment
//  *    tags: [Comments]
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            example:
//  *              "message": "NO ME GUSTA LO QUE DECIS"
//  *              
//  *    responses:
//  *      201:
//  *        description: Respuesta a comentario exitosa
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: object
//  *              example:
//  *                msg: Respuesta a comentario exitosa
//  *                
//  *
//  */


/**
 * @swagger
 * /api/comment/reaction/{id}:
 *  post:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: The id of the comment to react
 *    summary: Create a new reaction to specific comment
 *    tags: [Comments]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *               "reaction": "megusta"
 *              
 *    responses:
 *      201:
 *        description: "Reaccion  exitosa"
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: "Reaccion  exitosa"
 *                
 *
 */