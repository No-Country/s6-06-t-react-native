const generateJWT = require('../helpers/generateJWT');
const response = require('../helpers/response');
const { authServices } = require('../services');

const createUser = async (req, res) => {
    const body = req.body;

    try {
        const newUser = await authServices.newUser(body);

        if (newUser === 'error')
            return response.error(req, res, 'User already exists ', 400);

        if (!newUser) response.error(req, res, 'There is a problem in DB', 500);

        response.success(req,res,'User registered , validate account with the link provided in the email',
            { ...newUser },
            201
        );
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const validateAccount = async (req, res) => {
    const query = req.query;

    try {
        const validate = await authServices.validate(query);

        if (validate === 'invalid-token') {
            return response.error(req,res,'Invalid or expired activation account token',400);
        }

        res.render('success', { layout: 'index', message: validate });
    } catch (e) {
        return response.error(req, res, 'Contact Admin');
    }
};

const resendEmail = async (req, res) => {
    const uid = req.uid;
    try {
        await authServices.resendEmail(uid);

        response.success(req,res,'Email resend successfully , check inbox ',undefined,200);
    } catch (e) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const loginUser = async (req, res) => {
    const body = req.body;

    try {
        const user = await authServices.login(body);

        if (user === 'not-registered')
            return response.error(req, res, 'User not registered ', 400);
        if (user === 'validate')
            return response.error(req,res,'Must validate account with the provided email',400);
        if (user === 'bad-credentials')
            return response.error(req, res, 'Bad Credentials', 400);

        response.success(req, res, 'User logged in', user, 200);
    } catch (error) {
        return response.error(req, res, 'Contact Admin');
    }
};

const renewToken = async (req, res) => {
    const { uid, fullName } = req;

    const token = await generateJWT(uid, fullName);

    response.success(req, res, 'Token generated successfully ', { token }, 200);
};

    const generateLinkedinLink = (req, res) => {
    const url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=http://localhost:5000/api/auth/linkedin/callback&state=${process.env.STATE}&scope=openid%20email%20profile`;

    response.success(req, res, 'Open the link in the browser', { url });
};

const loginLinkedIn = async (req, res) => {
    const { code } = req.query;

    try {
        const login = await authServices.linkedIn(code);

        if (login === 'exist')
            return response.error(req, res, 'User email already exists ', 400);

        response.success(req, res, 'User logged in', login, 200);
    } catch (e) {
        return response.error(req, res, 'Contact ADMIN');
    }
};

const resetPasswordRequest = async (req, res) => {
    const { email } = req.body;

    try {
        const request = await authServices.requestReset(email);

        if (request === 'no-user')
            return response.error(req, res, 'Email not registered', 400);

        response.success(req,res,'Request for Password reset was successfully,Check email ',null,200);
    } catch (e) {
        return response.error(req, res, 'Contact Admin');
    }
};

const resetPassword = async (req, res) => {
    const query = req.query;
    const { password } = req.body;

    try {
        const reset = await authServices.reset(password, query);
        if (reset === 'invalid')
            return response.error(req,res,'Invalid or expired password reset token',400            );

        res.render('success', { layout: 'index', message: reset });
    } catch (e) {
        return response.error(req, res, 'Contact ADMIN');
    }
};

const renderRecoverPassword = (req, res) => {
    const { uid, token } = req.query;

    if (uid && token) {
        res.render('main', { layout: 'index', uid, token });
    } else {
        return response.error(req,res,'There is a problem with the provided url',400);
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
    renderRecoverPassword
};
