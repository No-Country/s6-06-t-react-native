const { app } = require('..');
const { Post } = require('../src/models');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('GET /api/post/all', function () {
    let total;

    this.beforeAll(async function () {
        total = (await Post.find()).length;
    });

    it('returns all posts, limited to 10 per page , only if user is admin', async function () {
        const response = await request
            .get('/api/post/all')
            .query(`from=0&to=10`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);
        expect(response.header['content-range']).to.eql(String(total));
        expect(response.body.data).to.have.lengthOf(10);
        expect(response.body.data[0].id).to.be.a('string');
    });

    it('returns  error, if user isnt admin', async function () {
        const response = await request
            .get('/api/post/all')
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);
    });
});

describe('POST /api/post/new/:channel', function () {
    const general = '63e3dc46a5dd297fac1ca2a2';

    it('Create a new post in specific channel', async function () {
        const response = await request
            .post(`/api/post/new/${general}`)
            .send({ title: 'TESTING', description: 'DESDE TESTING' })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(201);
        const post = response.body.data;
        expect(post.channel.name).to.eql('General');
        expect(post.title).to.eql('TESTING');
    });
});

describe('GET /api/post/comments/:id', function () {
    const post = '63ef96cffd82c2329516553a';

    it('returns all post comments , only active and with autors name ', async function () {
        const response = await request
            .get(`/api/post/comments/${post}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);
        expect(response.body.data).to.be.instanceOf(Array);
        expect(response.body.data[0]).to.have.property('reactions');
        expect(response.body.data[0]).to.have.property('author');

        response.body.data.map((comment) => {
            return expect(comment.active).to.not.be.false;
        });
    });

    it('returns  error, if user isnt admin', async function () {
        const response = await request
            .get('/api/post/all')
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);
    });
});

describe('PUT /api/post/update/:id', function () {
    it('Update a specific post', async function () {
        let post = await Post.findOne({ active: true, title: 'TESTING' });

        const response = await request
            .put(`/api/post/update/${post.id}`)
            .send({
                title: 'CAMBIADO DESDE TESTING'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        expect(response.body.data.title).to.eql('CAMBIADO DESDE TESTING');
    });

    it('Should fail with  code error', async function () {
        let post = { id: '63f3968e47d46f637062e2f8' };

        const response = await request
            .put(`/api/post/update/${post.id}`)
            .send({
                title: 'CAMBIADO DESDE TESTING'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(404);

        //AGREGAR OTRO USUARIO SIN ADMIN e INTENTAR MODIFICAR => 401
    });
});

describe('DELETE /api/post/:id', function () {
    let post;
    this.beforeAll(async function () {
        post = await Post.findOne({ active: true, title: 'CAMBIADO DESDE TESTING' });
    });

    it('Delete a specific post if is Admin user', async function () {
        let response = await request
            .delete(`/api/post/${post.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
            .delete(`/api/post/${post.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);

        expect(response.body.data).to.eql(post.id);


    });

    it('Should fail with 400 status code', async function () {
        const post = { id: '63f3968e47d46f637062e2f8' };

        const response = await request
            .delete(`/api/post/${post.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(500);
    });//Refactorizar servicio, no esta devolviendo respuesta adecuada

     //AGREGAR OTRO USUARIO SIN ADMIN e INTENTAR MODIFICAR => 401
});
