const { Post, Comment, JobOffer } = require('../models');

const models = {
    comment: Comment,
    post: Post,
    joboffer:JobOffer
};

const map={
    comment: "replieOf",
    post: "post",
    joboffer:"job_offer"
}

const make = async (payload, place, docId, uid) => {
    const doc = await models[place].findById(docId);

    if (!doc) throw new Error('no-doc');

    const comment = new Comment({
        body:payload,
        author: uid,
        [map[place]]:docId
    }).save()

    return comment;
};

module.exports = {
    make
};