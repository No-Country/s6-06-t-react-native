const swaggerJsDoc =require("swagger-jsdoc");


  
  
  
  const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sin Fronteras API",
      version: "1.0.0",
      description: "A Express and Mongo API",
    },
    servers: [
      {
        url: process.env.URL , ///COLOCAR URL DE DEPLOY
      },
    ],
  },
  apis: ["./src/swagger/*.js","./src/models/*.js"],
};

const specs = swaggerJsDoc(options);
module.exports=specs