/**
 * @swagger
 * tags:
 *  name: Profile
 *  description: Profile authentication endpoint
 */

/**
 * @swagger
 * /api/profile/:
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
 *    summary: Get all the information about user profile
 *    tags: [Profile]
 *    
 *            
 *    responses:
 *      201:
 *        description: the user account was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                "msg": "User found"
 *                "data": {
 *                     "fullName": "Michael",
 *                     "email": "f@bar.com",
 *                     "admin": false,
 *                     "selected": true,
 *                     "active": true,
 *                     "emailisvalidated": true,
 *                     "availability": "Mañana",
 *                     "technologies": [
 *                         "HTML",
 *                         "CSS"
 *                     ],
 *                     "phone": 4587123656,
 *                     "position": "fullstack",
 *                     "img_avatar": "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
 *                     "favorites": [],
 *                     "channels": [
 *                         "63e8ec9ec08f1c72e0d40a05"
 *                     ],
 *                     "postulations": [
 *                        {
 *                           "_id": "63ea5e31a132a300064cedf8",
 *                           "author": "63ea5aef35e5b43ca136e786",
 *                           "title": "General2",
 *                           "description": "Guuuenerauuuul2",
 *                           "channel": [
 *                               "63e8ec9ec08f1c72e0d40a07"
 *                           ],
 *                           "attached": [],
 *                           "active": true,
 *                           "__v": 0
 *                       }
 *                      ],
 *                     "createdAt": "2023-02-13T15:44:47.915Z",
 *                     "updatedAt": "2023-02-13T15:44:47.915Z",
 *                     "uid": "63ea5aef35e5b43ca136e786"
 *                 }
 *
 */



/**
 * @swagger
 * /api/profile/edit/remove:
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
 *    summary: Delete Account
 *    tags: [Profile]
 *    
 *            
 *    responses:
 *      200:
 *        description: Account disabled, must logout user!!
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                "msg": "Account deleted"
 *                "data": "63ea5aef35e5b43ca136e786"
 *                
 *
 */

/**
 * @swagger
 * /api/profile/edit/information:
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
 *    summary: Edit the  info about  the user profile
 *    tags: [Profile]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              fullName: otro nombre
 *              email: barFoo@foo.com
 *              phone: "123456687"
 *              availability: Tarde
 *              technologies: ["AdobeXD","Photoshop"]
 *              position: "fontend"
 *             
 *    
 *            
 *    responses:
 *      201:
 *        description: Updated profile
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                "msg": 'Updated profile'
 *                "data": {
 *                     "fullName": otro nombre,
 *                     "email": barFoo@foo.com,
 *                  "admin": false,
 *                     "selected": true,
 *                     "active": true,
 *                     "emailisvalidated": true,
 *                     "availability": "Tarde",
 *                     "technologies": [
 *                      "AdobeXD","Photoshop"
 *                      ],
 *                  
 *                     "position": "fontend",
 *                     "phone": "123456687",
 *                     "img_avatar": "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
 *                     "favorites": [],
 *                     "channels": [
 *                         "63e8ec9ec08f1c72e0d40a05"
 *                     ],
 *                     "postulations": [
 *                        {
 *                           "_id": "63ea5e31a132a300064cedf8",
 *                           "author": "63ea5aef35e5b43ca136e786",
 *                           "title": "General2",
 *                           "description": "Guuuenerauuuul2",
 *                           "channel": [
 *                               "63e8ec9ec08f1c72e0d40a07"
 *                           ],
 *                           "attached": [],
 *                           "active": true,
 *                           "__v": 0
 *                       }
 *                      ],
 *                     "createdAt": "2023-02-13T15:44:47.915Z",
 *                     "updatedAt": "2023-02-13T15:44:47.915Z",
 *                     "uid": "63ea5aef35e5b43ca136e786"
 *                 }
 *
 */



// /**
//  * @swagger
//  * /api/profile/edit/professional:
//  *  put:
//  *    parameters:
//  *      - in: header
//  *        name: x-token
//  *        schema:
//  *          type: string
//  *        
//  *        required: true
//  *        description: The token users account
//  * 
//  *    summary: Edit the professional info in the user profile
//  *    tags: [Profile]
//  *    requestBody:
//  *      required: true
//  *      content:
//  *        application/json:
//  *          schema:
//  *            type: object
//  *            example:
//  *              availability: Tarde
//  *              technologies: ["AdobeXD","Photoshop"]
//  *              educationalLevel: ""
//  *              position: "fontend"
//  *              jobTitle: ""
//  *    
//  *            
//  *    responses:
//  *      201:
//  *        description: Updated profile
//  *        content:
//  *          application/json:
//  *            schema:
//  *              example:
//  *                "msg": 'Updated profile'
//  *                "data": {
//  *                     "fullName": otro nombre,
//  *                     "email": barFoo@foo.com,
//  *                     "admin": false,
//  *                     "selected": true,
//  *                     "active": true,
//  *                     "emailisvalidated": true,
//  *                     "availability": "Tarde",
//  *                     "technologies": ["AdobeXD","Photoshop"],
//  *                     "phone": "123456687",
//  *                     "position": "fontend",
//  *                     "img_avatar": "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
//  *                     "favorites": [],
//  *                     "channels": [
//  *                         "63e8ec9ec08f1c72e0d40a05"
//  *                     ],
//  *                     "postulations": [
//  *                        {
//  *                           "_id": "63ea5e31a132a300064cedf8",
//  *                           "author": "63ea5aef35e5b43ca136e786",
//  *                           "title": "General2",
//  *                           "description": "Guuuenerauuuul2",
//  *                           "channel": [
//  *                               "63e8ec9ec08f1c72e0d40a07"
//  *                           ],
//  *                           "attached": [],
//  *                           "active": true,
//  *                           "__v": 0
//  *                       }
//  *                      ],
//  *                     "createdAt": "2023-02-13T15:44:47.915Z",
//  *                     "updatedAt": "2023-02-13T15:44:47.915Z",
//  *                     "uid": "63ea5aef35e5b43ca136e786"
//  *                 }
//  *
//  */


/**
 * @swagger
 * /api/profile/edit/applications:
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
 *    summary: Remove selected  postulations
 *    tags: [Profile]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              remove: ["63ea5e31a132a300064cedf8"]
 *              
 *    
 *            
 *    responses:
 *      200:
 *        description: Updated profile
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                "msg": 'Updated profile'
 *                "data": {
 *                     "fullName": otro nombre,
 *                     "email": barFoo@foo.com,
 *                     "admin": false,
 *                     "selected": true,
 *                     "active": true,
 *                     "emailisvalidated": true,
 *                     "availability": "Tarde",
 *                     "technologies": ["AdobeXD","Photoshop"],
 *                     "phone": "123456687",
 *                     "position": "fontend",
 *                     "img_avatar": "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
 *                     "favorites": [],
 *                     "channels": [
 *                         "63e8ec9ec08f1c72e0d40a05"
 *                     ],
 *                     "postulations": [
 *                         "63ea5e53a132a300064cee00"
 *                           
 *                      ],
 *                     "createdAt": "2023-02-13T15:44:47.915Z",
 *                     "updatedAt": "2023-02-13T15:44:47.915Z",
 *                     "uid": "63ea5aef35e5b43ca136e786"
 *                 }
 *
 */


/**
 * @swagger
 * /api/profile/edit/post-saved:
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
 *    summary: Remove saved posts
 *    tags: [Profile]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            example:
 *              remove: ["63ea5e31a132a3000jhjhj8"]
 *              
 *    
 *            
 *    responses:
 *      200:
 *        description: Updated profile
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                "msg": 'Updated profile'
 *                "data": {
 *                     "fullName": otro nombre,
 *                     "email": barFoo@foo.com,
 *                     "admin": false,
 *                     "selected": true,
 *                     "active": true,
 *                     "emailisvalidated": true,
 *                     "availability": "Tarde",
 *                     "technologies": ["AdobeXD","Photoshop"],
 *                     "phone": "123456687",
 *                     "position": "fontend",
 *                     "img_avatar": "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
 *                     "favorites": [],
 *                     "channels": [
 *                         "63e8ec9ec08f1c72e0d40a05"
 *                     ],
 *                     "postulations": [
 *                         "63ea5e53a132a300064cee00"
 *                           
 *                      ],
 *                     "createdAt": "2023-02-13T15:44:47.915Z",
 *                     "updatedAt": "2023-02-13T15:44:47.915Z",
 *                     "uid": "63ea5aef35e5b43ca136e786"
 *                 }
 *
 */



/**
 * @swagger
 * /api/profile/edit/profile-pic:
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
 *    summary: Update the profile Pic
 *    tags: [Profile]
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
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
 *      200:
 *        description: Updated Profile
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg:  Updated Profile
 *                "data": {
 *                   "fullName": "zaz",
 *                   "email": "ddsds64@fd.com",
 *                   "password": "$2a$10$jXRNAxsJYSLB6aQIwNWK9uvSTg6Nv91GAqajb8dzAdPrNfO9qE15y",
 *                   "admin": false,
 *                   "selected": true,
 *                   "active": false,
 *                   "emailisvalidated": true,
 *                   "availability": "Tarde",
 *                   "technologies": [
 *                       "AdobeXD",
 *                       "Photoshop"
 *                   ],
 *                   "phone": 1345,
 *                   "position": "frontend",
 *                   "img_avatar": "https://res.cloudinary.com/dv2elz7mk/image/upload/v1676312334/bbyjl3uojjrwoqwi76ya.png",
 *                   "favorites": [],
 *                   "channels": [
 *                       "63e8ec9ec08f1c72e0d40a05"
 *                   ],
 *                   "postulations": [
 *                       "63ea5e53a132a300064cee00"
 *                   ],
 *                   "createdAt": "2023-02-13T15:44:47.915Z",
 *                   "updatedAt": "2023-02-13T18:18:54.987Z",
 *                   "uid": "63ea5aef35e5b43ca136e786"
 *                    }
 */