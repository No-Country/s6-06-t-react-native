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
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
    availability: {
      type: String,
      enum: ["Full-Time", "Mañana", "Tarde"],
    },
    technologies: {
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
    // pinnedpost: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'post'
    // }],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    channels: [{
        type: Schema.Types.ObjectId,
        ref: 'channel',
    }],
    job_applications:[{
        type: Schema.Types.ObjectId,
        ref: 'job_offer',
    }],
  
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: "reaction",
      },
    ],
  
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
