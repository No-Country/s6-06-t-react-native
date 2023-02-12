const bcrypt = require('bcryptjs');
const { Post, User, Channel, TokenRecover } = require('../models');
const { handleEmailToken, generateJWT, sendEmail } = require('../helpers');
const validateLink = `${process.env.URL}/api/auth/validate-account`;
const resetLink = `${process.env.URL}/api/auth/reset-password`;
const validateTemplate = {
    title: 'Vefify account',
    path: './template/accountVerification.handlebars'
};

const resetTemplate = {
    title: 'Password Reset Request',
    path: './template/requestResetPassword.handlebars'
};

const newUser = async (body) => {
    const { email, password } = body;

    let newUser = await User.findOne({ email });

    if (newUser) {
        return 'error';
    }

    newUser = new User(body);

    const salt = bcrypt.genSaltSync();

    newUser.password = bcrypt.hashSync(password.toString(), salt);

    const channel = await Channel.findOne({ name: 'General' });

    newUser.channels.push(channel.id);

    const savedUser = await newUser.save();

    const token = await generateJWT(savedUser.id, savedUser.fullName);

    handleEmailToken(savedUser, validateLink, validateTemplate);

    const { password: pswd, ...userData } = savedUser.toJSON();

    return { ...userData, token };
};

const validate = async (query) => {
    const { uid, token } = query;

    let verificationToken = await TokenRecover.findOne({ uid });

    if (!verificationToken) return 'invalid-token';

    const isValid = await bcrypt.compare(token, verificationToken.token);

    if (!isValid) return 'invalid-token';

    await User.updateOne(
        { _id: uid },
        { $set: { emailisvalidated: true } },
        { new: true }
    );

    await verificationToken.deleteOne();

    return 'Cuenta activada con exito';
};

const resendEmail = async (uid) => {
    const user = await User.findById(uid);

    await handleEmailToken(user, validateLink, validateTemplate);
};

const login = async (body) => {
    const { email, password } = body;

    const user = await User.findOne({ email }).lean();

    if (!user) return 'not-registered';
    if (!user.emailisvalidated) return 'validate';

    const validatePassword = bcrypt.compareSync(
        password.toString(),
        user.password
    );

    if (!validatePassword) return 'bad-credentials';

    const token = await generateJWT(user._id, user.fullName);

    const { password: pswd, ...userData } = user;

    return { ...userData, token };
};

const linkedIn = async (code) => {
    const data = `code=${code}&grant_type=authorization_code&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=http://localhost:5000/api/auth/linkedin/callback`;
    let linkedinToken;
    await fetch(`https://www.linkedin.com/oauth/v2/accessToken`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
        .then((response) => response.json())
        .then((data) => (linkedinToken = data));

    let linkedinProfile;
    await fetch('https://api.linkedin.com/v2/userinfo', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${linkedinToken.access_token}`
        }
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
            img_avatar: picture
        });

        const newUser = await user.save();

        const { password: pswd, ...userData } = newUser.toJSON();

        const token = await generateJWT(user.id, user.fullName);

        return { ...userData, token };
    }

    const validatePassword = bcrypt.compareSync(sub.toString(), user.password);

    if (!validatePassword) return 'exist';

    const { password: pswd, ...userData } = user.toJSON();
    const token = await generateJWT(user.id, user.fullName);
    return { ...userData, token };
};

const requestReset = async (email) => {
    const user = await User.findOne({ email });

    if (!user) return 'no-user';

    handleEmailToken(user, resetLink, resetTemplate);
};

const reset = async (password, query) => {
    const { uid, token } = query;

    let passwordResetToken = await TokenRecover.findOne({ uid });
    if (!passwordResetToken) return 'invalid';
    const isValid = await bcrypt.compare(token, passwordResetToken.token);
    if (!isValid) return 'invalid';

    const hash = await bcrypt.hash(password, 10);
    const user = await User.updateOne(
        { _id: uid },
        { $set: { password: hash } },
        { new: true }
    );
    sendEmail(
        user.email,
        'Password Reset Successfully',
        { name: user.fullName },
        './template/resetPassword.handlebars'
    );
    await passwordResetToken.deleteOne();

    return 'Contraseña actualizada con exito';
};

module.exports = {
    newUser,
    validate,
    resendEmail,
    login,
    linkedIn,
    requestReset,
    reset
};
