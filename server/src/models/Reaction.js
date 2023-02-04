const {model, Schema} = require('mongoose');

const reactionSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    type: String,
    // post:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // }]
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction