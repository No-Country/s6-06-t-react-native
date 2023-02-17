const { Schema, model } = require('mongoose');

const offerSchema = new Schema(
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

        channel: [
            {
                type: Schema.Types.ObjectId,
                ref: 'channel'
            }
        ],
        attached: [String],
        active: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            enum: ['front', 'back', 'ui']
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: { virtuals: true },
        toObject: { virtuals: false }
    }
);

offerSchema.virtual('candidates', {
    ref: 'user',
    localField: '_id',
    foreignField: 'postulations'
});
offerSchema.virtual('countCandidates', {
    ref: 'user',
    localField: '_id',
    foreignField: 'postulations',
    count: true
});

offerSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'job_offer'
});
offerSchema.virtual('countComments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'job_offer',
    count: true
});

offerSchema.methods.toJSON = function idSetter() {
    const { _id, ...Offer } = this.toObject();
    Offer.id = _id;
    return Offer;
};

const Offer = model('jobOffer', offerSchema);

module.exports = Offer;
