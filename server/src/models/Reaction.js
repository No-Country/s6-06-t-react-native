const {model, Schema} = require('mongoose');

const reactionSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    type__Reaction: {
        type: String,
        enum: [
        'megusta',
        'meinteresa',
        'apoyar',
        'hacergracia'
        ]
    },
    post:[{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
});

reactionSchema.methods.toJSON = function idSetter() {
    const { _id, ...Reaction } = this.toObject();
    Reaction.id = uid;
    return Reaction;
};

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction