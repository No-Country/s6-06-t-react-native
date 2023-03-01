const { app } = require('..');
const {  Channel } = require('../src/models');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('GET /api/channel/all ', function () {
    let total;

    this.beforeAll(async function () {
        total = (await Channel.find()).length;
    });

    it('returns all channels, limited by filter ', async function () {
        const response = await request
            .get('/api/channel/all')
            .query(`filter=`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);
        expect(response.header['content-range']).to.eql(String(total));
        expect(response.body.data.count).to.eql(total);
    });
});

describe('GET /api/channel/user ', function () {
    it('returns all channels user is joined ', async function () {
        const response = await request
            .get('/api/channel/user')
            .set('x-token', process.env.TEST);

        expect(response.statusCode).to.eql(200);
        expect(response.body.data.channels).to.be.instanceOf(Array);
        expect(response.body.data.channels[0].name).to.eql('General');
    });
});

describe('GET /api/channel/:id ', function () {
    const channel = '63e3dc46a5dd297fac1ca2a2';
    it('returns all posts in specific channel', async function () {
        const response = await request
            .get(`/api/channel/${channel}`)
            .set('x-token', process.env.TEST);

        expect(response.statusCode).to.eql(200);

        const posts = response.body.data.posts;

        posts.map((post) =>
            expect(post).to.have.any.keys('id', 'title', 'author', 'channel')
        );
    });
});


const name = 'Test';

describe('POST /api/channel/new ', function () {
    it('Create new channel only if is admin ', async function () {
        
        let response = await request
            .post(`/api/channel/new`)
            .send({ name, typechannel: 'public' })
            .set('x-token', process.env.TEST);

        expect(response.statusCode).to.eql(201);
        expect(response.body.data.name).to.eql(name);

        response = await request
            .post(`/api/channel/new`)
            .send({ name, typechannel: 'public' })
            .set('x-token', process.env.TEST);

        expect(response.statusCode).to.eql(400);

        response = await request
            .post(`/api/channel/new`)
            .send({ name, typechannel: 'public' })
            .set('x-token', process.env.USER_TEST);

        expect(response.statusCode).to.eql(403);
    });
});

describe('PUT /api/channel/:id', function () {
    it('Update a specific Channel , only admin', async function () {
        let channel = await Channel.findOne({  name });

        let response = await request
            .put(`/api/channel/${channel.id}`)
            .send({
                title: 'CAMBIADO DESDE TESTING'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
        .put(`/api/channel/${channel.id}`)
        .send({
            name: 'CAMBIADO DESDE TESTING'
        })
        .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200)
        expect(response.body.data.name).to.eql('CAMBIADO DESDE TESTING');
    });
});

describe('DELETE /api/channel/:id', function () {
    let channel;
    this.beforeAll(async function () {
        channel = await Channel.findOne({  name: 'CAMBIADO DESDE TESTING' });
    });

    it('Delete a specific Channel if is Admin user', async function () {
        let response = await request
            .delete(`/api/channel/${channel.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
        .delete(`/api/channel/${channel.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);

        expect(response.body.data.name).to.eql(channel.name);


    });

    it('Should fail with 400 status code', async function () {
        const channel = { id: '63f3968e47d46f637062e2f8' };

        const response = await request
            .delete(`/api/channel/${channel.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(404);
    });
});


