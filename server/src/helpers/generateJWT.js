const jwt =require("jsonwebtoken")

  const generateJWT = (uid, name)=> {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) {
          reject("There is an error when generate JWT");
        }
        if (token) {
          resolve(token);
        }
      }
    );
  });
};

module.exports=generateJWT


