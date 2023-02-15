/**
 * @swagger
 * tags:
 *  name: Job-Offer
 *  description: Job Offer endpoint.
 */

/**
 * @swagger
 * /api/job-offer/new:
 *  post:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 *      
 *    summary: Create a new job offer
 *    tags: [Job-Offer]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              title: "Hola"
 *              description : "texto"
 *               
 *    responses:
 *      201:
 *        description: Oferta creada con éxito
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Oferta creada con éxito
 *                data: { 
 *                   "author": "63ea5aef35e5b43ca136e786",
 *                   "title": "Hola",
 *                   "description": "Texto",
 *                   "channel": [
 *                       "63e8ec9ec08f1c72e0d40a07"
 *                   ],
 *                   "attached": [],
 *                   "active": true,
 *                   "__v": 0,
 *                   "id": "63ea80c9cb3b34652ee1e86c" }
 *
 */

/**
 * @swagger
 * /api/job-offer/update/{id}:
 *  put:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 * 
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of offer to update
 *      
 *    summary: Update a  job offer
 *    tags: [Job-Offer]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              title: "Nuevo titulo"
 *              description : "texto"
 *               
 *    responses:
 *      201:
 *        description: Oferta modificada con éxito
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Oferta modificada con éxito
 *                data: { 
 *                   "author": "63ea5aef35e5b43ca136e786",
 *                   "title": "Nuevo titulo",
 *                   "description": "Texto",
 *                   "channel": [
 *                       "63e8ec9ec08f1c72e0d40a07"
 *                   ],
 *                   "attached": [],
 *                   "active": true,
 *                   "__v": 0,
 *                   "id": "63ea80c9cb3b34652ee1e86c" }
 *
 */


/**
 * @swagger
 * /api/job-offer/delete/{id}:
 *  put:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 * 
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of offer to update
 *      
 *    summary: Update a  job offer
 *    tags: [Job-Offer]
 *    
 *               
 *    responses:
 *      200:
 *        description: Oferta eliminada exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Oferta eliminada exitosamente
 *                data: { 
 *                   }
 *
 */




/**
 * @swagger
 * /api/job-offer/postulate/{id}:
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
 *          format: uuid
 *        required: true
 *        description: the id of offer to postulate 
 *    summary: Create a new job offer
 *    tags: [Job-Offer]
 *   
 *               
 *    responses:
 *      201:
 *        description: postulación exitosa
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: postulación exitosa
 *                data: { 
 *                    }
 *
 */



/**
 * @swagger
 * /api/job-offer/all:
 *  get:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          format: uuid
 *        required: true
 *        description: The token users account
 *      
 *    summary: Gets all offers
 *    tags: [Job-Offer]
 *    
 *               
 *    responses:
 *      200:
 *        description: ofertas obtenidas con éxito
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: ofertas obtenidas con éxito
 *                data: [
 *                       {
 *                           "author": "63e8faaeaab201e690a87589",
 *                           "title": "zaz",
 *                           "description": "private",
 *                           "channel": [
 *                               "63e8ec9ec08f1c72e0d40a07"
 *                           ],
 *                           "attached": [],
 *                           "active": true,
 *                           "__v": 0,
 *                           "id": "63e923a6696be9c2b8973027",
 *                           "candidates": {
 *                               "count": 1,
 *                               "data": [
 *                                   "63e8faaeaab201e690a87589"
 *                               ]
 *                           },
 *                           "comments": {
 *                               "count": 0,
 *                               "data": []
 *                           }
 *                       },
 *                       {
 *                           "author": "63e8faaeaab201e690a87589",
 *                           "title": "Gel",
 *                           "description": "Generauuuul2",
 *                           "channel": [
 *                               "63e8ec9ec08f1c72e0d40a07"
 *                           ],
 *                           "attached": [],
 *                           "active": true,
 *                           "__v": 0,
 *                           "id": "63e92822973e9b1dd24fe354",
 *                           "candidates": {
 *                               "count": 4,
 *                               "data": [
 *                                   "63e8faaeaab201e690a87589",
 *                                   "63e933944ff1f471a17a40a4",
 *                                   "63e933b14ff1f471a17a40af",
 *                                   "63e933c14ff1f471a17a40ba"
 *                               ]
 *                           },
 *                           "comments": {
 *                               "count": 2,
 *                               "data": [
 *                                   {
 *                                       "author": "63e8faaeaab201e690a87589",
 *                                       "body": "Generasl2",
 *                                       "active": true,
 *                                       "attached": [],
 *                                       "job_offer": "63e92822973e9b1dd24fe354",
 *                                       "createdAt": "2023-02-12T19:08:31.763Z",
 *                                       "updatedAt": "2023-02-12T19:08:31.763Z",
 *                                       "id": "63e9392faddc7be26e0d6642"
 *                                   },
 *                                   {
 *                                       "author": "63e8faaeaab201e690a87589",
 *                                       "body": "Generasl2",
 *                                       "active": true,
 *                                       "attached": [],
 *                                       "job_offer": "63e92822973e9b1dd24fe354",
 *                                       "createdAt": "2023-02-12T19:10:10.657Z",
 *                                       "updatedAt": "2023-02-12T19:10:10.657Z",
 *                                       "id": "63e9399259c49b38413b08be"
 *                                   }
 *                               ]
 *                           }
 *                       },   
 *                   ]
 *
 */



// /**
//  * @swagger
//  * /api/comment/reaction/{id}:
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
//  *        description: The id of the comment to react
//  *    summary: Create a new reaction to specific comment
//  *    tags: [Comments]
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            example:
//  *               "reaction": "megusta"
//  *              
//  *    responses:
//  *      201:
//  *        description: "Reaccion  exitosa"
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: object
//  *              example:
//  *                msg: "Reaccion  exitosa"
//  *                
//  *
//  */