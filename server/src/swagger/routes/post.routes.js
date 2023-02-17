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
 * 
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
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:      
 *              title:            
 *                type: string
 *                
 *              description:       
 *                type: string
 *                
 *              attached:  
 *                type: string
 *                format: binary
 *          encoding: 
 *          attached: 
 *            contentType: image/png, image/jpeg
 *           
 *            
 *            
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
 *                 "author": {
 *                     "_id": "63e5b75334de3305d0198a5f",
 *                     "fullName": "tytytyt"
 *                 },
 *                 "title": "post",
 *                 "description": "something",
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
 * /api/post/update/{id}:
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
 *        description: the id of post to  update
 *    summary: Edit a post
 *    tags: [Posts]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              title : "NUEVO TITULO"
 *              description : "SOME DESCRPTION" 
 *           
 *            
 *            
 *    responses:
 *      201:
 *        description: Post updated
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Post updated
 *                data: {
 *                 "author": {
 *                     "_id": "63e5b75334de3305d0198a5f",
 *                     "fullName": "tytytyt"
 *                 },
 *                 "title": "post",
 *                 "description": "something",
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
