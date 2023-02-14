const { Post, Comment, Reaction, Channel, User } = require('../models');

const models = {
    comment: Comment,
    post: Post
};

const make = async (payload, place, docId, uid) => {
    const doc = await models[place].findById(docId);

    if (!doc) throw new Error('no-doc');

    const newReaction = await new Reaction({
        user: uid,
        type__Reaction: payload,
        [place]: docId
    }).save();

    return newReaction;
};

module.exports = {
    make
};
