const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const generateJWT = require("../helpers/generateJWT");
const { User, Token } = require("../models");
const response = require("../helpers/response");
const sendEmail = require("../helpers/sendEmail");

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

    const savedUser = await newUser.save();

    const { password: pswd, ...userData } = savedUser.toObject();

    const token = await generateJWT(newUser.id, newUser.fullName);

    response.success(req, res, "User registered", { ...userData, token }, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Contact Admin", 500);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).lean();

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

    const { password: pswd, ...userData } = user;

    response.success(req, res, "User logged in", { ...userData, token }, 200);
  } catch (error) {
    console.log(error);
    return response.error(req, res, "Contact Admin");
  }
};

const generateLinkedinLink = (req, res) => {
  const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:5000/api/auth/linkedin/callback&state=${process.env.STATE}&scope=openid%20email%20profile`;

  response.success(req, res, "Open the link in the browser", { url });
};

const loginLinkedIn = async (req, res) => {
  const { code } = req.query;

  try {
    const data = `code=${code}&grant_type=authorization_code&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:5000/api/auth/linkedin/callback`;
    let linkedinToken;
    await fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => (linkedinToken = data));

    let linkedinProfile;
    await fetch("https://api.linkedin.com/v2/userinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${linkedinToken.access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => (linkedinProfile = data));

    const { email, picture, name, sub } = linkedinProfile;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        fullName: name,
        email,
        password: bcrypt.hashSync(sub.toString(), bcrypt.genSaltSync()),
        img_avatar: picture,
      });

      const newUser= await user.save();
      const { password: pswd, ...userData } = newUser.toObject();
      const token = await generateJWT(user.id, user.fullName);
      response.success(
        req,
        res,
        "User registered",
        {
          ...userData,
          token
        },
        201
      );
    } else {
      // const validatePassword = bcrypt.compareSync(
      //   sub.toString(),
      //   user.password
      // );

      // if (user && !validatePassword) {
      //   return response.error(req, res, "User email already exists ", 400);
      // }

      const { password: pswd, ...userData } = user.toObject();
      const token = await generateJWT(user.id, user.fullName);
      response.success(
        req,
        res,
        "User logged in",
        {
          ...userData,
          token
          
        },
        200
      );
    }
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

  response.success(req, res, "Request for Password reset was succesfull ", link, 200);
};

const resetPassword = async (req, res) => {
  const { uid, token } = req.query;
  const { password } = req.body;
  console.log(uid, token);
  if (token === "" || uid === "") {
    return response.error(
      req,
      res,
      "There is a problem with the provided url",
      400
    );
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
  res.render("success", { layout: "index" });
};

const renderRecoverPassword = (req, res) => {
  const { uid, token } = req.query;

  if (uid && token) {
    res.render("main", { layout: "index", uid, token });
  } else {
    response.error(req, res, "There is a problem with the provided url", 400);
  }
};

module.exports = {
  createUser,
  loginUser,
  generateLinkedinLink,
  loginLinkedIn,
  resetPasswordRequest,
  resetPassword,
  renderRecoverPassword,
};
