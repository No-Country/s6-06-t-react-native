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
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

module.exports=options