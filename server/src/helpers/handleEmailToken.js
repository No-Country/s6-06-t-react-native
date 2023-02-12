const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { TokenRecover } = require('../models');
const sendEmail = require('../helpers/sendEmail');

const handleEmailToken = async (user, base, template) => {
    let tokenVerification = await TokenRecover.findOne({ uid: user.id });

    if (tokenVerification) await tokenVerification.deleteOne();

    let resetToken = crypto.randomBytes(32).toString('hex');

    const hash = await bcrypt.hash(resetToken, 10);

    const link = `${base}?token=${resetToken}&uid=${user.id}`;

    await new TokenRecover({
        uid: user.id,
        token: hash,
        createdAt: Date.now(),
        email: user.email,
        name: user.fullName
    }).save();

    sendEmail(
        user.email,
        template.title,
        {
            name: user.name,
            link: link
        },
        template.path
    );
};

module.exports = handleEmailToken;
