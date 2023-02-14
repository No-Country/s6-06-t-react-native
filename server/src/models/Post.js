const { model, Schema } = require('mongoose');

const postSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
            //required: true
        },
        // comments: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'comment'
        // }],
        // reactions: [{
        //     type: Schema.Types.ObjectId,
        //     ref: 'reaction'
        // }],
        channel: [
            {
                type: Schema.Types.ObjectId,
                ref: 'channel'
            }
        ],
        attached: [String],
        important: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: true
        },
        permissions: {
            type: Boolean,
            default: true
        }
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
        timestamps: true,
        versionKey: false
    }
);
postSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'post'
});

postSchema.virtual("countComments", {
    ref: 'comment',
    localField: '_id',
    foreignField: 'post',
    count: true
});
postSchema.virtual('reactions', {
    ref: 'reaction',
    localField: '_id',
    foreignField: 'post'
});

const reactions = ['megusta', 'meinteresa', 'apoyar', 'hacergracia'];

reactions.forEach(reaction=> {
    postSchema.virtual(reaction, {
        ref: 'reaction',
        localField: '_id',
        foreignField: 'post',
        match: { type__Reaction: reaction },
        count: true
    });
})


postSchema.methods.toJSON = function idSetter() {
    const { _id, ...Post } = this.toObject();
    Post.id = _id;
    return Post;
};

const Post = model('post', postSchema, 'post');

module.exports = Post;
