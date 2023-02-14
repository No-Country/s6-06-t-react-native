const { Post, Comment, Reaction, Channel, User } = require('../models');

const models = {
    comment: Comment,
    post: Post
};

const make = async (payload, place, docId, uid) => {
    const doc = await models[place].findById(docId);

    if (!doc) throw new Error('no-doc');

    const reaction=await Reaction.findOne({user:uid,[place]:docId})
    if(reaction) await reaction.deleteOne()

    const newReaction = await new Reaction({
        user: uid,
        type__Reaction: payload,
        [place]: docId
    }).save();

    return newReaction;
};

const remove = async ( place, docId, uid) => {
    const doc = await models[place].findById(docId);

    if (!doc) throw new Error('no-doc');

    const reaction=await Reaction.findOne({user:uid,[place]:docId})


    if(reaction) await reaction.deleteOne()

    return 
};

module.exports = {
    make,
    remove
};
