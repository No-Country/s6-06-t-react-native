const { model, Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        type__Reaction: {
            type: String,
            enum: ['megusta', 'meinteresa', 'apoyar', 'hacergracia']
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'post'
        },
        comment: {
            type: Schema.Types.ObjectId,
            ref: 'comment'
        }
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
        timestamps: true,
        versionKey: false
    }
);

reactionSchema.methods.toJSON = function idSetter() {
    const { _id, ...Reaction } = this.toObject();
    Reaction.id = _id;
    return Reaction;
};

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
