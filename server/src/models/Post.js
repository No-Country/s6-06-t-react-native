const {model, Schema} = require('mongoose');

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        Type: String,
        // required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }],
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'reaction'
    }],
    channel: [{
        type: Schema.Types.ObjectId,
        ref: 'channel'
    }],
    attached: [String],
    important: {
        type:Boolean,
        default: false
    },
    // active: {
    //     type: Boolean,
    //     default: true
    // },
    permissions:{
        type:Boolean,
        default:true
    }
},
{
    timestamps: true,
    versionKey: false
});

postSchema.methods.toJSON = function idSetter() {
    const { _id, ...Post } = this.toObject();
    Post.uid = _id;
    return Post;
};

const Post = model('post', postSchema)

module.exports = Post;