const { app } = require('..');
const { Post, Channel } = require('../src/models');
const request = require('supertest')(app);
const expect = require('chai').expect;

// router.post("/new",  isAdmin, verifyChannel.create,  channel.createChannel)
//       .put('/:id',  isAdmin,verifyChannel.edit, channel.updateChannel)
//       .delete('/:id',  isAdmin,verifyChannel.remove, channel.deleteChannel)

//       .get('/user',  channel.getUserChannels)
//       .get('/:id', channel.getPostsChannel)

describe('GET /api/channel/all as user', function () {
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

    describe('GET /api/channel/user ', function () {

    
        it('returns all channels user is joined ', async function () {
            const response = await request
                .get('/api/channel/user')
                .set('x-token', process.env.TEST);
     
            expect(response.status).to.eql(200);
       
           // expect(response.body.data).to.eql(total);
            
        });

    // it('returns  error, if user isnt admin', async function () {
    //     const response = await request
    //         .get('/api/post/all')
    //         .set('x-token', process.env.USER_TEST);

    //     expect(response.status).to.eql(403);
    // });
})
})