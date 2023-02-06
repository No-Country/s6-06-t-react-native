const bcrypt = require("bcryptjs");
const generateJWT = require("../helpers/generateJWT");
const { User } = require("../models");
const response = require("../helpers/response");

const createUser = async (req, res) => {
  const {email,password} = req.body;

  try {
    let newUser = await User.findOne({ email });

    if (newUser) {
      return response.error(req, res, "User already exists ", 400);
    }

    newUser = new User(req.body);

    const salt = bcrypt.genSaltSync(  );
    newUser.password = bcrypt.hashSync(password.toString(), salt);

    await newUser.save();

    const token = await generateJWT(newUser.id, newUser.name);

    response.success(
      req,
      res,
      "User registered",
      { uid: newUser.id, name: newUser.name, token },
      201
    );
  } catch (error) {
    console.log(error);
    response.error(req, res, "Contact Admin");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return response.error(req, res, "User not registered ", 400);
    }

    const validatePassword = bcrypt.compareSync(
      password.toString(),
      user.password
    );

    if (!validatePassword) {
      return response.error(req, res, "Bad Credentials", 400);
    }

    const token = await generateJWT(user.id, user.name);

    response.success(
      req,
      res,
      "User registered",
      { uid: user.id, name: user.name, token },
      200
    );
  } catch (error) {
    console.log(error);
    return response.error(req, res, "Contact Admin");
  }
};

const loginLinkedIn = async (req, res) => {
  const { code } = req.query;

  try {
    const data = `code=${code}&grant_type=authorization_code&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:5000/api/auth/linkedin/callback`;
    const request = await fetch(
      `https://www.linkedin.com/oauth/v2/accessToken`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      }
    );

    const obj = await request.json();

    const getProfile = await fetch("https://api.linkedin.com/v2/userinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${obj.access_token}`,
      },
    });

    const { email, picture, name } = await getProfile.json();

    let newUser = await User.findOne({ email });

    if (newUser) {
      //DEBE LOGUAER GENERANDO JWT????????
      return response.error(req, res, "User email already exists ", 400);
    }

    newUser = new User({
      username: name,
      email,
      password: "8459*734DfhgDSFGf*4-45",
      picture,
    });

    await newUser.save();

    const token = await generateJWT(newUser.id, newUser.name);

    response.success(
      req,
      res,
      "User registered",
      { uid: newUser.id, token, name, email },
      201
    );
  } catch (e) {
    console.log(e);
    return response.error(req, res, "Contact ADMIN");
  }
};

module.exports = {
  createUser,
  loginUser,
  loginLinkedIn,
};
