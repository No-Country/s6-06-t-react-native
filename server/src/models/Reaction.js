const {model, Schema} = require('mongoose');

const reactionSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    type: String,
    // post:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // }]
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction