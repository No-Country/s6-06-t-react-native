const {model, Schema} = require('mongoose');

const commentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    body: { 
        type: String,
        required: true,
    },
    post:{
        type: Schema.Types.ObjectId,
        ref: 'post'
    },
    offer:{
        type: Schema.Types.ObjectId,
        ref: 'jobOffer'
    },
    active: {
        type: Boolean,
        default: true
    },
    attached: [String],
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }],

    // reactions: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'reaction'
    // }]
},
{
    timestamps: true,
    versionKey: false
})

commentSchema.methods.toJSON = function idSetter() {
    const { _id, ...Comment } = this.toObject();
    Comment.id = _id;
    return Comment;
};

const Comment = model('comment', commentSchema);

module.exports = Comment;