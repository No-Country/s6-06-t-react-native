/**
 * @swagger
 * tags:
 *  name: Posts
 *  description: Posts endpoint.
 */

/**
 * @swagger
 * /api/post/create/{channel}:
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
 *        name: channel
 *        schema:
 *          type: string
 *          format: id
 *        required: true
 *        description: the id of channel to  make the post
 *    summary: Create a new Post in a specific channel
 *    tags: [Posts]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              title: "Nuevo Post"
 *              description: "Todo el texto necesario"
 *    responses:
 *      201:
 *        description: Post created successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Post created successfully
 *                data: {
 *                 "user": {
 *                     "_id": "63e5b75334de3305d0198a5f",
 *                     "fullName": "tytytyt"
 *                 },
 *                 "title": "post",
 *                 "comments": [],
 *                 "reactions": [],
 *                 "channel": [
 *                     {
 *                         "_id": "63e527334301295852cc4f4f",
 *                         "name": "General"
 *                     }
 *                 ],
 *                 "attached": [],
 *                 "id": "63e6cd3753fb75d12dc33aa8"
 *                  }
 *
 */

/**
 * @swagger
 * /api/post/reaction/{id}:
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
 *        description: the id of post to  make the reaction
 *    summary: Make a reaction to a post 
 *    tags: [Posts]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              reaction: megusta,
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


// /**
//  * @swagger
//  * /api/post/{id}:
//  *  delete:
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
//  *        description: the id of channel to update
//  *    summary: Delete a  Channel  , only for admin users
//  *    tags: [Posts]
//  *    
//  *    responses:
//  *      200:
//  *        description: Canal eliminado
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: object
//  *              example:
//  *                msg: Canal eliminado
//  *                data: { 
//  *                  "name": "Seleccionado",
//  *                  }
//  *
//  */




// /**
//  * @swagger
//  * /api/post/user/{uid}:
//  *  get:
//  *    parameters:
//  *      - in: header
//  *        name: x-token
//  *        schema:
//  *          type: string
//  *          format: uuid
//  *        required: true
//  *        description: The token users account
//  *      - in: params
//  *        name: uid
//  *        schema:
//  *          type: string
//  *          format: uid
//  *        required: true
//  *        description: the uid of the user
//  *    summary: Gets the channel where the user is joined
//  *    tags: [Posts]
//  *    
//  *    responses:
//  *      200:
//  *        description: Canales encontrados
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: object
//  *              example:
//  *                msg: Canales encontrados
//  *                data: { 
//  *                   "channels": [
//  *                      {
//  *                          "name": "General",
//  *                          "id": "63e527334301295852cc4f4f"
//  *                      }
//  *                      ]}
//  *
//  */

// /**
//  * @swagger
//  * /api/post/{id}:
//  *  get:
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
//  *        description: the id of the channel
//  *    summary: Gets all posts  specific channel 
//  *    tags: [Posts]
//  *    
//  *    responses:
//  *      200:
//  *        description: Canal encontrado
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: object
//  *              example:
//  *                msg: Canal encontrado
//  *                data: { 
//  *                    "posts": [
//  *                         {
//  *                             "user": "63e5b0dc18e65afddcd3be3c",
//  *                             "title": "PRIMERggg",
//  *                             "comments": [],
//  *                             "reactions": [],
//  *                             "channel": [],
//  *                             "attached": [],
//  *                             "important": false,
//  *                             "active": true,
//  *                             "permissions": true,
//  *                             "createdAt": "2023-02-10T03:13:12.774Z",
//  *                             "updatedAt": "2023-02-10T03:13:12.774Z",
//  *                             "id": "63e5b64834de3305d0198a50"
//  *                         },
//  *                         {
//  *                             "user": "63e5b75334de3305d0198a5f",
//  *                             "title": "post",
//  *                             "comments": [
//  *                                 "63e641d2b4895ce97338ca86",
//  *                                 "63e68823434ebfc2b51e73fa",
//  *                                 "63e6882a434ebfc2b51e73ff",
//  *                                 "63e688c83a34c0301bbe8d15",
//  *                                 "63e688d43a34c0301bbe8d1a",
//  *                                 "63e688e84430ed2e2f43508a",
//  *                                 "63e688f24430ed2e2f43508f"
//  *                             ],
//  *                             "reactions": [
//  *                                 "63e64bddaeb2f49113cc3c39",
//  *                                 "63e64c0504892f5cdecb3518",
//  *                                 "63e6851897afce3a513118b0"
//  *                             ],
//  *                             "channel": [
//  *                                 "63e527334301295852cc4f4f"
//  *                             ],
//  *                             "attached": [],
//  *                             "important": false,
//  *                             "active": true,
//  *                             "permissions": true,
//  *                             "createdAt": "2023-02-10T13:06:42.235Z",
//  *                             "updatedAt": "2023-02-10T18:12:02.768Z",
//  *                             "id": "63e64162b4895ce97338ca7d"
//  *                         }]
//  *                        }
//  *
//  */



// /**
//  * @swagger
//  * /api/post/all:
//  *  get:
//  *    parameters:
//  *      - in: header
//  *        name: x-token
//  *        schema:
//  *          type: string
//  *          format: uuid
//  *        required: true
//  *        description: The token users account
//  *      
//  *    summary: Gets all the channels , only for admins
//  *    tags: [Posts]
//  *    
//  *    responses:
//  *      200:
//  *        description: Canales encontrados
//  *        content:
//  *          application/json:
//  *            schema:
//  *              type: object
//  *              example:
//  *                msg: Canales encontrados
//  *                data: { 
//  *                   "channels": [
//  *                      {
//  *                          "name": "General",
//  *                          "id": "63e527334301295852cc4f4f"
//  *                      },
//  *                      {
//  *                          "name": "Seleccionado",
//  *                          "id": "63e527334301295852cc4f4f"
//  *                      },
//  *                        {
//  *                          "name": "Requerimientos",
//  *                          "id": "63e527334301295852cc4f4f"
//  *                      }
//  *                      ]}
//  *
//  */