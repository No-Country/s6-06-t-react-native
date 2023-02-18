const { model, Schema } = require('mongoose');

const commentSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        body: {
            type: String
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'post'
        },
        active: {
            type: Boolean,
            default: true
        },
        attached: [String],
        replieOf: {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        },
        job_offer: {
            type: Schema.Types.ObjectId,
            ref: 'JobOffer'
        }
    },
    {
        toObject: { virtuals: true },///console.log
        toJSON: { virtuals: true },//res
        timestamps: true,
        versionKey: false
    }
);

commentSchema.virtual("reactions",{
    ref:"reaction",
    localField:"_id" ,
    foreignField:"comment",
})

commentSchema.virtual("reply",{
    ref:"comment",
    localField:"_id" ,
    foreignField:"replieOf",
})

const reactions = ['megusta', 'meinteresa', 'apoyar', 'hacergracia'];

reactions.forEach((reaction) => {
    commentSchema.virtual(reaction, {
        ref: 'reaction',
        localField: '_id',
        foreignField: 'comment',
        match: { type__Reaction: reaction },
        count: true
    });
});

commentSchema.methods.toJSON = function idSetter() {
    const { _id, ...Comment } = this.toObject();
    Comment.id = _id;
    return Comment;
};

const Comment = model('comment', commentSchema);


module.exports = Comment;
