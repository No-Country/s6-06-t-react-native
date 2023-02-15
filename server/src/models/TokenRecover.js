const { model, Schema } = require('mongoose');

const tokenSchema = new Schema({
    uid: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});
module.exports = model('token', tokenSchema);
