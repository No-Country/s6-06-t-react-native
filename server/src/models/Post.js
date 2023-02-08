const {model, Schema} = require('mongoose');

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String
    } ,
    body: {
        type: String  
    } ,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
    }],
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'reaction'
    }],
    attached: [String],

    important: {
        type:Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    permissions:{
        type:Boolean,
        default:true
    }
},
{timestamps: true,
versionKey: false});

const Post = model('post', postSchema)

module.exports = Post