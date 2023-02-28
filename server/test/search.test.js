const { app } = require('..');
const { Post, User } = require('../src/models');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('GET /api/search?search=', function () {
    it('Make a search in post and users ', async function () {
        let response = await request
            .get(`/api/search?search=${''}`)
            .set('x-token', process.env.USER_TEST);

        const { data } = response.body;
        const [users, post] = data;

        expect(users.length).to.be.below(11);
        expect(post.length).to.be.below(11);
    });
});
