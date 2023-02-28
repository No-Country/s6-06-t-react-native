const { app } = require('..');
const { Channel, JobOffer, User } = require('../src/models');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('GET /api/job-offer/all ', function () {
    it('returns all job offers, limited by filter ', async function () {
        const total = (await JobOffer.find()).length;
        const response = await request
            .get('/api/job-offer/all')

            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);
        expect(response.header['content-range']).to.eql(String(total));
        expect(response.body.data.length).to.eql(total);
    });
});

describe('POST /api/job-offer/new ', function () {
    it('Create new offer only if is admin ', async function () {
        let response = await request
            .post(`/api/job-offer/new`)
            .send({
                description: 'DESDE TESTING',
                title: 'TESTING OFFER',
                type: 'back'
            })
            .set('x-token', process.env.TEST);

        expect(response.statusCode).to.eql(201);
        expect(response.body.data.title).to.eql('TESTING OFFER');

        response = await request
            .post(`/api/channel/new`)
            .send({
                description: 'DESDE TESTING',
                title: 'TESTING OFFER',
                type: 'back'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.statusCode).to.eql(403);
    });
});

describe('PUT /api/job-offer/edit/:id', function () {
    it('Update a specific offer , only admin', async function () {
        let offer = await JobOffer.findOne({ title: 'TESTING OFFER' });

        let response = await request
            .put(`/api/job-offer/edit/${offer.id}`)
            .send({
                title: 'CAMBIADO DESDE TESTING'
            })
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
            .put(`/api/job-offer/edit/${offer.id}`)
            .send({
                title: 'CAMBIADO DESDE TESTING'
            })
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);
        expect(response.body.data.title).to.eql('CAMBIADO DESDE TESTING');
    });
});

describe('POST /api/job-offer/postulate/:id', function () {
    it('postulate user to  a specific offer ', async function () {
        let offer = await JobOffer.findOne({ title: 'CAMBIADO DESDE TESTING' });

        let response = await request
            .post(`/api/job-offer/postulate/${offer.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(200);

        const user = await User.findById(process.env.USER_ID);

        expect(user.postulations).include(offer.id);
    });
});

describe('DELETE /api/job-offer/:id', function () {
    let offer;
    this.beforeAll(async function () {
        offer = await JobOffer.findOne({ title: 'CAMBIADO DESDE TESTING' });
    });

    it('Delete a specific Offer only if  is Admin user', async function () {
        let response = await request
            .delete(`/api/job-offer/${offer.id}`)
            .set('x-token', process.env.USER_TEST);

        expect(response.status).to.eql(403);

        response = await request
            .delete(`/api/job-offer/${offer.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(200);

        expect(response.body.data.title).to.eql(offer.name);
    });

    it('Should fail with 400 status code', async function () {
        const offer = { id: '63f3968e47d46f637062e2f8' };

        const response = await request
            .delete(`/api/job-offer/${offer.id}`)
            .set('x-token', process.env.TEST);

        expect(response.status).to.eql(404);
    });
});
