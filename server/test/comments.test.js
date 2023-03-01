const { app } = require('..');
const {  JobOffer, Post, Comment } = require('../src/models');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('POST /api/comment/new/{id}/post ', function () {
    it('Create new comment in specific post ', async function () {
        const post = await Post.findOne();

        let response = await request
            .post(`/api/comment/new/${post.id}/post`)
            .send({ body: 'COMENTARIO DESDE TESTING EN POST' })
            .set('x-token', process.env.USER_TEST);

        expect(response.statusCode).to.eql(201);
        expect(response.body.data.body).to.eql(
            'COMENTARIO DESDE TESTING EN POST'
        );
        expect(response.body.data.post).to.eql(post.id);
    });

    it('Create new comment in specific offer ', async function () {
        const offer = await JobOffer.findOne();

        let response = await request
            .post(`/api/comment/new/${offer.id}/joboffer`)
            .send({ body: 'COMENTARIO DESDE TESTING EN OFFER' })
            .set('x-token', process.env.USER_TEST);

        expect(response.statusCode).to.eql(201);
        expect(response.body.data.body).to.eql(
            'COMENTARIO DESDE TESTING EN OFFER'
        );
        expect(response.body.data.job_offer).to.eql(offer.id);
    });

    it('Create new comment as reply of specific comment ', async function () {
        const comment = await Comment.findOne();

        let response = await request
            .post(`/api/comment/new/${comment.id}/comment`)
            .send({ body: 'COMENTARIO DESDE TESTING EN COMMENT' })
            .set('x-token', process.env.USER_TEST);

        expect(response.statusCode).to.eql(201);
        expect(response.body.data.body).to.eql(
            'COMENTARIO DESDE TESTING EN COMMENT'
        );
    });
});

describe('PUT /api/comment/edit/:id', function () {
    it('Update a specific comment ', async function () {
        let comment = await Comment.findOne({
            body: 'COMENTARIO DESDE TESTING EN COMMENT'
        });
        let comment2 = await Comment.findOne({
            body: 'COMENTARIO DESDE TESTING EN OFFER'
        });
        let comment3 = await Comment.findOne({
            body: 'COMENTARIO DESDE TESTING EN POST'
        });

        let response = await request
            .put(`/api/comment/edit/${comment.id}`)
            .send({
                body: 'CAMBIADO DESDE TESTING'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(201);

        response = await request
            .put(`/api/comment/edit/${comment2.id}`)
            .send({
                body: 'CAMBIADO DESDE TESTING 2'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(201);
        response = await request
            .put(`/api/comment/edit/${comment3.id}`)
            .send({
                body: 'CAMBIADO DESDE TESTING 3'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(201);
    });

    //PROBAR COMO OTRO USER
});

describe('PUT /api/comment/delete/:id', function () {
    it('delete a comment as user ', async function () {
        let comment = await Comment.findOne({ body: 'CAMBIADO DESDE TESTING' });

        let response = await request
            .put(`/api/comment/delete/${comment.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);
    });

    it('delete a comment as user ', async function () {
        let comment = await Comment.findOne({
            body: 'CAMBIADO DESDE TESTING 2'
        });

        let response = await request
            .put(`/api/comment/delete/${comment.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);
    });

    it('delete a comment as user ', async function () {
        let comment = await Comment.findOne({
            body: 'CAMBIADO DESDE TESTING 3'
        });

        let response = await request
            .put(`/api/comment/delete/${comment.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);
    });
});

describe('DELETE /api/comment/:id', function () {
    it('Delete a specific comment in post only if  is Admin user', async function () {
        const comment = await Comment.findOne({
            body: 'CAMBIADO DESDE TESTING'
        });
        let response = await request
            .delete(`/api/comment/${comment.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
            .delete(`/api/comment/${comment.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);
        const deleted = await Comment.findById(comment.id);
        expect(deleted).to.be.null;
    });
    it('Delete a specific comment in comment only if  is Admin user', async function () {
        const comment = await Comment.findOne({
            body: 'CAMBIADO DESDE TESTING 3'
        });
        let response = await request
            .delete(`/api/comment/${comment.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
            .delete(`/api/comment/${comment.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);
        const deleted = await Comment.findById(comment.id);
        expect(deleted).to.be.null;
    });
    it('Delete a specific comment in offer only if  is Admin user', async function () {
        const comment = await Comment.findOne({
            body: 'CAMBIADO DESDE TESTING 2'
        });
        let response = await request
            .delete(`/api/comment/${comment.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
            .delete(`/api/comment/${comment.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);
        const deleted = await Comment.findById(comment.id);
        expect(deleted).to.be.null;
    });

   
});
