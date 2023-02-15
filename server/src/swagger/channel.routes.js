/**
 * @swagger
 * tags:
 *  name: Channels
 *  description: Channles endpoint.
 */

/**
 * @swagger
 * /api/channel/new:
 *  post:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *          
 *        required: true
 *        description: The token users account
 *    summary: Create a new Channel , only for admin users
 *    tags: [Channels]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              name: Nuevo canal
 *    responses:
 *      201:
 *        description: Canal creado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Canal creado exitosamente
 *                data: { 
 *                  "name": Nuevo Canal,
 *                  
 *                  "typechannel": "public",
 *                  "createdAt": "2023-02-10T13:04:02.218Z",
 *                  "updatedAt": "2023-02-10T13:04:02.218Z",
 *                  "id": "63e640c2b4895ce97338ca61" }
 *
 */

/**
 * @swagger
 * /api/channel/{id}:
 *  put:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *         
 *        required: true
 *        description: The token users account
 * 
 *      - in: params
 *        name: id
 *        schema:
 *          type: string
 *       
 *        required: true
 *        description: the id of channel to update
 *    summary: Edit name of Channel and privacity , only for admin users
 *    tags: [Channels]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              name: Nuevo Nombre
 *              typechannel: private
 *    responses:
 *      201:
 *        description: Canal creado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Canal actualizado exitosamente
 *                data: { 
 *                  "name": "Nuevo Nombre",
 *                  
 *                  "typechannel": "private",
 *                  "createdAt": "2023-02-10T13:04:02.218Z",
 *                  "updatedAt": "2023-02-10T18:32:17.954Z",
 *                  "id": "63e640c2b4895ce97338ca61" }
 *
 */


/**
 * @swagger
 * /api/channel/{id}:
 *  delete:
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
 *        description: the id of channel to update
 *    summary: Delete a  Channel  , only for admin users
 *    tags: [Channels]
 *    
 *    responses:
 *      200:
 *        description: Canal eliminado
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Canal eliminado
 *                data: { 
 *                  "name": "Seleccionado",
 *                  }
 *
 */




/**
 * @swagger
 * /api/channel/user:
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
 *    summary: Gets the channel where the user is joined
 *    tags: [Channels]
 *    
 *    responses:
 *      200:
 *        description: Canales encontrados
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Canales encontrados
 *                data:  
 *                  [
 *                      {
 *                          "name": "General",
 *                          "id": "63e527334301295852cc4f4f"
 *                      }
 *                      ]
 *
 */

/**
 * @swagger
 * /api/channel/{id}:
 *  get:
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
 *        description: the id of the channel
 *    summary: Gets all posts  specific channel 
 *    tags: [Channels]
 *    
 *    responses:
 *      200:
 *        description: Canal encontrado
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Canal encontrado
 *                data: { 
 *                    "posts": [
 *                         {
 *                             "user": "63e5b0dc18e65afddcd3be3c",
 *                             "title": "PRIMERggg",
 *                             "comments": [],
 *                             "reactions": [],
 *                             "channel": [],
 *                             "attached": [],
 *                             "important": false,
 *                             "active": true,
 *                             "permissions": true,
 *                             "createdAt": "2023-02-10T03:13:12.774Z",
 *                             "updatedAt": "2023-02-10T03:13:12.774Z",
 *                             "id": "63e5b64834de3305d0198a50"
 *                         },
 *                         {
 *                             "user": "63e5b75334de3305d0198a5f",
 *                             "title": "post",
 *                             "comments": [
 *                                 {
 *                                 "_id": "63ea3c64481c880aedc97678",
 *                                 "body": "Generasl2",
 *                                 "attached": [],
 *                                 "post": "63ea3abb2058e8310c6b1e0d",
 *                                 "createdAt": "2023-02-13T13:34:28.419Z"
 *                             }
 *                             ],
 *                             "reactions": [
 *                                 {
 *                   "_id": "63ea3c64481c880aedc97678",
 *                   "type_reaction": "megusta",
 *                   
 *                   "post": "63ea3abb2058e8310c6b1e0d",
 *                   
 *               }
 *                             ],
 *                             "channel": [
 *                                 "63e527334301295852cc4f4f"
 *                             ],
 *                             "attached": [],
 *                             "important": false,
 *                             "active": true,
 *                             "permissions": true,
 *                             "createdAt": "2023-02-10T13:06:42.235Z",
 *                             "updatedAt": "2023-02-10T18:12:02.768Z",
 *                             "id": "63e64162b4895ce97338ca7d"
 *                         }]
 *                        }
 *
 */



/**
 * @swagger
 * /api/channel/all:
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
 *    summary: Gets all the channels , only for admins
 *    tags: [Channels]
 *    
 *    responses:
 *      200:
 *        description: Canales encontrados
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Canales encontrados
 *                data: { 
 *                    count: 3,
 *                    channels: [
 *                      {
 *                          "name": "General",
 *                          "id": "63e527334301295852cc4f4f"
 *                      },
 *                      {
 *                          "name": "Seleccionado",
 *                          "id": "63e527334301295852cc4f4f"
 *                      },
 *                        {
 *                          "name": "Requerimientos",
 *                          "id": "63e527334301295852cc4f4f"
 *                      }
 *                      ]}
 *
 */