const { model, Schema } = require('mongoose');

const isReadSchema = new Schema(
    {
        uid: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'user'
        },
        doc: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'post'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);
module.exports = model('isread', isReadSchema);
