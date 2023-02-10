const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const generateJWT = require("../helpers/generateJWT");
const { User, Channel, TokenRecover } = require("../models");
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

    ////////////////////////////EL ID CORRESPONDE AL DEL CANAL GENERAL 
    const channel = await Channel.findById("63e527334301295852cc4f4f");

    newUser.channels.push(channel.id);
    ////////////////////////////

    const savedUser = await newUser.save();

    ///// SACAR A FUNCION

    const token = await generateJWT(savedUser.id, savedUser.fullName);

    let tokenVerification = await TokenRecover.findOne({ uid: savedUser.id });

    if (tokenVerification) await TokenRecover.deleteOne({ uid: savedUser.id });

    let resetToken = crypto.randomBytes(32).toString("hex");

    const hash = await bcrypt.hash(resetToken, 10);
    const link = `${process.env.URL}/api/auth/validate-account?token=${resetToken}&uid=${savedUser._id}`;

    await new TokenRecover({
      uid: savedUser.id,
      token: hash,
      createdAt: Date.now(),
      email: savedUser.email,
      name: savedUser.fullName,
    }).save();

    sendEmail(
      savedUser.email,
      "Account Verification",
      {
        name: savedUser.name,
        link: link,
      },
      "./template/accountVerification.handlebars"
    );
///////


    const { password: pswd, ...userData } = savedUser.toJSON();

    response.success(
      req,
      res,
      "User registered , validate account with the link provided in the email",
      { ...userData, token },
      201
    );
  } catch (error) {
    console.log(error);
    response.error(req, res, "Contact Admin", 500);
  }
};

const validateAccount = async (req, res) => {
  const { uid, token } = req.query;

  try {
    let verificationToken = await TokenRecover.findOne({ uid });

    if (!verificationToken) {
      return response.error(
        req,
        res,
        "Invalid or expired activation account token",
        400
      );
    }

    const isValid = await bcrypt.compare(token, verificationToken.token);

    if (!isValid) {
      response.error(
        req,
        res,
        "Invalid or expired activation account token",
        400
      );
    }

    await User.updateOne(
      { _id: uid },
      { $set: { emailisvalidated: true } },
      { new: true }
    );

    await verificationToken.deleteOne();

    const message = "Cuenta activada con exito";

    res.render("success", { layout: "index", message });
  } catch (e) {
    console.log(e);
    return response.error(req, res, "Contact Admin");
  }
};

const resendEmail = async (req, res) => {
  const uid = req.uid;
  try {
    let tokenVerification = await TokenRecover.findOne({ uid });

    if (!tokenVerification) {
      return response.error(req, res, "Invalid link", 400);
    }

    await TokenRecover.deleteOne();

    let resetToken = crypto.randomBytes(32).toString("hex");

    const hash = await bcrypt.hash(resetToken, 10);

    const link = `${process.env.URL}/api/auth/validate-account?token=${resetToken}&uid=${uid}`;

    await new TokenRecover({
      uid,
      token: hash,
      createdAt: Date.now(),
      email: tokenVerification.email,
      name: tokenVerification.name,
    }).save();

    sendEmail(
      tokenVerification.email,
      "Account Verification",
      {
        name: tokenVerification.name,
        link: link,
      },
      "./template/accountVerification.handlebars"
    );

    response.success(req, res, "Email resend succesfully , check inbox ", undefined, 200);
  } catch (e) {
    console.log(e);
    response.error(req, res, "Contact Admin", 500);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).lean();
console.log(user.id)
    if (!user) {
      return response.error(req, res, "User not registered ", 400);
    }

    if (!user.emailisvalidated) {
      return response.error(
        req,
        res,
        "Must validate account with the provided email",
        400
      );
    }

    const validatePassword = bcrypt.compareSync(
      password.toString(),
      user.password
    );

    if (!validatePassword) {
      return response.error(req, res, "Bad Credentials", 400);
    }

    const token = await generateJWT(user._id, user.fullName);

    const { password: pswd, ...userData } = user;

    response.success(req, res, "User logged in", { ...userData, token }, 200);
  } catch (error) {
    console.log(error);
    return response.error(req, res, "Contact Admin");
  }
};


const renewToken = async(req, res) => {

  const {uid,fullName}=req
  
  
  const token=await generateJWT(uid,fullName)
  
  response.success(req,res,"Token generated succesfully ",{token},200)
  
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

      const newUser = await user.save();
      const { password: pswd, ...userData } = newUser.toObject();
      const token = await generateJWT(user.id, user.fullName);
      response.success(
        req,
        res,
        "User registered",
        {
          ...userData,
          token,
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
          token,
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

  let token = await TokenRecover.findOne({ uid: user.id });
  if (token) await token.deleteOne();

  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, 10);

  await new TokenRecover({
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

  response.success(
    req,
    res,
    "Request for Password reset was succesfull ",
    link,
    200
  );
};

const resetPassword = async (req, res) => {
  const { uid, token } = req.query;
  const { password } = req.body;

  if (token === "" || uid === "") {
    return response.error(
      req,
      res,
      "There is a problem with the provided url",
      400
    );
  }

  let passwordResetToken = await TokenRecover.findOne({ uid });

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

  const message = "Contraseña actualizada con exito";
  res.render("success", { layout: "index", message });
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
  validateAccount,
  resendEmail,
  renewToken,
  loginUser,
  generateLinkedinLink,
  loginLinkedIn,
  resetPasswordRequest,
  resetPassword,
  renderRecoverPassword,
};
