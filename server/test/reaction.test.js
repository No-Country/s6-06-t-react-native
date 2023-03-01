const { app } = require('..');
const { Reaction, Post, Comment } = require('../src/models');
const request = require('supertest')(app);
const expect = require('chai').expect;

let reactionInComment;
let reactionInPost;

describe('POST /api/reaction/{place}', function () {
    it('Make a reaction to post , only one,and remove', async function () {
        const post = await Post.findOne();
        let response = await request
            .post(`/api/reaction/post/${post.id}`)
            .send({ reaction: 'meinteresa' })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        response = await request
            .post(`/api/reaction/post/${post.id}`)
            .send({ reaction: 'apoyar' })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        response = await request
            .post(`/api/reaction/post/${post.id}`)
            .send({ reaction: 'meinteresa' })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        reactionInPost = await Reaction.find({ post: post.id });

        const reaction = reactionInPost[0].type__Reaction;
        expect(reactionInPost).to.have.lengthOf(1);
        expect(reaction).to.eql('meinteresa');

        response = await request
            .put(`/api/reaction/post/${reactionInPost[0].post}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);
    });

    it('Make a reaction to comment , only one,and remove', async function () {
        const comment = await Comment.findOne();
        let response = await request
            .post(`/api/reaction/comment/${comment.id}`)
            .send({ reaction: 'apoyar' })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        response = await request
            .post(`/api/reaction/comment/${comment.id}`)
            .send({ reaction: 'meinteresa' })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        response = await request
            .post(`/api/reaction/comment/${comment.id}`)
            .send({ reaction: 'apoyar' })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        reactionInComment = await Reaction.find({ comment: comment.id });

        expect(reactionInComment).to.have.lengthOf(1);
        expect(reactionInComment[0].type__Reaction).to.eql('apoyar');

        response = await request
            .put(`/api/reaction/comment/${reactionInComment[0].comment}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);
    });
});
