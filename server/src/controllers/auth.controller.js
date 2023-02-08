const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const handlebars = require("handlebars");
const generateJWT = require("../helpers/generateJWT");
const { User, Token } = require("../models");
const response = require("../helpers/response");
const sendEmail = require("../helpers/sendEmail");
const { body } = require("express-validator");

const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let newUser = await User.findOne({ email });

    if (newUser) {
      return response.error(req, res, "User already exists ", 400);
    }

    newUser = new User(req.body);

    const salt = bcrypt.genSaltSync();
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

const resetPasswordRequest = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return response.error(req, res, "Email not registered", 400);

  let token = await Token.findOne({ uid: user.id });
  if (token) await token.deleteOne();

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, 10);
  console.log(user);
  await new Token({
    uid: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();

  const link = `${process.env.URL}/api/auth/reset-password?token=${resetToken}&uid=${user._id}`;

  sendEmail(
    user.email,
    "Password Reset Request",
    {
      name: user.name,
      link: link,
    },
    "./template/requestResetPassword.handlebars"
  );

  response.success(req, res, "succes", link, 200);
};

const resetPassword = async (req, res) => {
  const { uid, token } = req.query;
  const { password } = req.body;
console.log(uid,token)
if(token===""||uid===""){
  return response.error(req,res,"There is a problem with the provided url",400)
}

  let passwordResetToken = await Token.findOne({ uid });

  if (!passwordResetToken) {
    response.error(req, res, "Invalid or expired password reset token", 400);
  }

  const isValid = await bcrypt.compare(token, passwordResetToken.token);

  if (!isValid) {
    response.error(req, res, "Invalid or expired password reset token", 400);
  }
  const hash = await bcrypt.hash(password, 10);

  await User.updateOne(
    { _id: uid },
    { $set: { password: hash } },
    { new: true }
  );

  const user = await User.findById({ _id: uid });

  sendEmail(
    user.email,
    "Password Reset Successfully",
    {
      name: user.name,
    },
    "./template/resetPassword.handlebars"
  );

  await passwordResetToken.deleteOne();
  res.render("success", { layout: "index" })

};

const renderRecoverPassword = (req, res) => {
  const { uid, token } = req.query;

  if(uid && token ){
    res.render("main", { layout: "index", uid, token });
  }else{
    response.error(req,res,"There is a problem with the provided url",400)
  }
  
};

module.exports = {
  createUser,
  loginUser,
  loginLinkedIn,
  resetPasswordRequest,
  resetPassword,
  renderRecoverPassword,
};
