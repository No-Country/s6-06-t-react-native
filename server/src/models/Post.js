const {model, Schema} = require('mongoose');

const postSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    body: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    reactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reaction'
    }],
    attached: [String],
    // pinned: Boolean,
    important: {
        type:Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
},
{timestamps: true,
versionKey: false});

const Post = model('Post', postSchema)

module.exports = Post