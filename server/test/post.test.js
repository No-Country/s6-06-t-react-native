// router.use(validatorJWT)

// router.post('/new/:channel',  post.createPost )
// router.put('/update/:id',  post.updatePost)
// router.delete('/:id', isAdmin,  post.PostsRemove)
// //router.put('/favorite/:id', post.postFavoriteUser)
// router.get('/comments/:id', post.getComments)



// const expect = require("chai").expect;
 const { app } = require("..");
const { Post } = require("../src/models");
// var request = require('supertest')(app)
// var host = process.env.URL;
// //var request = supertest.agent(app)

const request = require("supertest")(app);
const expect = require("chai").expect;

describe("GET /api/post/all",  function () {

let total 

this.beforeAll(async function () {
  total= (await Post.find()).length
})

  it("returns all posts, limited to 10 per page", async function () {
    const response = await request.get("/api/post/all").set("x-token", process.env.TEST);

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(total)
    expect(response.body.data[0].id).to.be.a("string")
  });

  it("returns all posts, only if user is admin", async function () {
    const response = await request.get("/api/post/all").set("x-token", process.env.USER_TEST);

    expect(response.status).to.eql(403);
  });
});
            


// describe("GET /api/posts/all ",  function () {
//   it("returns all airports, limited to 30 per page",async function  (done) {
//     const response = await request.get("/api/post/all").set("x-token", process.env.TEST)

//     expect(response.status).toEqual(200,done)
//     // expect(response.body.data.length).toEqual(51)
//     // expect(response.body.data[0].id).to.be.a("string",done)
//   });
// });
// /**
//  * Testing user endpoint by giving an existing user
//  */
// describe("GET /users/:id", () => {
//   it("respond with json containing a single user", (done) => {
//     request(app)
//       .get("/users/U0001")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });

//   it("respond with json user not found when the user does not exists", (done) => {
//     request(app)
//       .get("/users/nonexistinguser")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(404)
//       .expect('"user not found"')
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

// /**
//  * Testing POST users endpoint
//  */
// describe("POST /users", () => {
//   it("respond with 201 created", (done) => {
//     const data = {
//       username: "fazt",
//       password: "password123",
//     };
//     request(app)
//       .post("/users")
//       .send(data)
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(201)
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   });

//   it("respond with 400 on bad request", (done) => {
//     const data = {
//       // no username and password
//     };
//     request(app)
//       .post("/users")
//       .send(data)
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(400)
//       .expect('"user not created"')
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   });
//});
