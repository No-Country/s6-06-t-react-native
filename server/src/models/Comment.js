const {model, Schema} = require('mongoose');

const commentSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    body: String,
    // post:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // }],
    active: {
        type: Boolean,
        default: true
    },
    attached: [String],
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    reactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reaction'
    }]
},
{timestamps: true,
versionKey: false})

const Comment = model('Comment', commentSchema);

module.exports = Comment