/**
 * @swagger
 * tags:
 *  name: Search
 *  description: Seacrh endpoint
 */

/**
 * @swagger
 * /api/search:
 *  get:
 *    parameters:
 *      - in: header
 *        name: x-token
 *        schema:
 *          type: string
 *         
 *        required: true
 *        description: The token users account
 *      - in: query
 *        name: search
 *        schema:
 *          type: string
 *  
 *        required: true
 *        description: The term to perform the search
 * 
 *    summary: Search for posts in all joined channels
 *    tags: [Search]
 *    responses:
 *      201:
 *        description: Results
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              example:
 *                msg: Results
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

