const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: true,//TODO:CAMBIAR EN PRODUCCION
    },
    selected: {
      type: Boolean,
      default: true,//TODO:CAMBIAR EN PRODUCCION
    },
    active: {
      type: Boolean,
      default: true,
    },
    educationalLevel: {
      type:String
    },
    jobTitle:{
      type:String
    },
    emailisvalidated: {
      type: Boolean,
      default: true,//TODO:CAMBIAR EN PRODUCCION
    },
    availability: {
      type: String,
      enum: ["Full-Time", "Mañana", "Tarde"],
    },
    technologies: [
      {
        type: String,
        enum: [
          "HTML",
          "CSS",
          "Figma",
          "AdobeXD",
          "Framer X",
          "Photoshop",
          "Illustrator",
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "Go",
          "Vue.js",
          "Next.js",
          "React",
          "React Native",
          "Angular",
          "Jest",
          "Selenium",
          "Node.js",
          "Express.js",
          "Deno",
          "GraphQL",
          "Koa",
        ],
      },
    ],
    phone: {
      type: Number,
    },
    position: {
      type: String,
      enum: ["fullstack", "backend", "frontend", "uiux"],
    },
    img_avatar: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png",
    },
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    channels: [
      {
        type: Schema.Types.ObjectId,
        ref: "channel",
      },
    ],
    postulations: [{
      type: Schema.Types.ObjectId,
      ref: "jobOffer"
    }]
     // pinnedpost: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'post'
    // }],
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "comment",
    //   },
    // ],
    
    // posts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "post",
    //   },
    // ],
    // reactions: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "reaction",
    //   },
    // ],
   
  },
  { timestamps: true, versionKey: false }
);

userSchema.methods.toJSON = function idSetter() {
  const { _id, ...User } = this.toObject();
  User.uid = _id;
  return User;
};

const User = model("user", userSchema);

module.exports = User;

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        fullName:
 *          type: string
 *          description: the name of the user
 *        email:
 *          type: string
 *          description: the email of the user account
 *        availability:
 *          type: string
 *          description: the shift available to work
 *        technologies:
 *          type: string
 *          description: technologies that you know
 *        phone:
 *          type: string
 *          description:  the phone number
 *        position:
 *          type: string
 *          description:  the rol of the dev
 *      required:
 *        - name
 *        - email
 *        - password
 *        - availability
 *        - technologies
 *        - position
 *      example:
 *        fullName: Michael
 *        email: foo@bar.com
 *        password: fooBar
 *        availability: "Mañana"
 *        technologies: ["HTML","CSS"]
 *        phone: "4587123656"
 *        position: "fullstack"
 *    Response:
 *      type: object
 *      example:
 *           fullName: Foo Bar
 *           email: foo@bar.com
 *           admin: false
 *           selected: false
 *           active: true
 *           emailisvalidated: false
 *           availability: "Mañana"
 *           technologies: ["HTML","CSS"]
 *           phone: "124578965253"
 *           position: "fullstack"
 *           img_avatar: "https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png"
 *           channels: [63e8ec9ec08f1c72e0d40a05]
 *           postulations: []
 *           favorites: []
 *           createdAt: "2023-02-08T11:39:20.351Z"
 *           updatedAt: "2023-02-08T11:39:20.351Z"
 *           uid": "63e389e8b78b96ca44b5132d"
 *           token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibHVjYXMgemFyYXRlIiwiaWF0IjoxNjc1ODU2MzYwLCJleHAiOjE2NzU5NDI3NjB9.86gYblfldijom9otS7xIydWLzrSo6YVvA9MVw3tRcjY"
 *    Login:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: the email of the user account
 *        password:
 *          type: string
 *          description: the password of the user account
 *      required:
 *        - email
 *        - password
 *      example:
 *           email: foo@bar.com
 *           password: "foobar"
 *
 */
