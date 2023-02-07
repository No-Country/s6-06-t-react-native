const { Schema, model} = require('mongoose')
const {Channel}=require("./Channel")




const userSchema = new Schema ({
    username: {
        type: String,
        default: false 
    },
    email:{
        type: String,
        default: false 
    },
    password:{
        type: String,
        default: false 
    },
    admin: {
        type: Boolean,
        default: false 
    },
    selected: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    availability: String,
    technologies: [String],
    phone: String,
    position: String,
    picture: {
        Type:String,
       // default: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'  
    },
    studies: String,
    area: String,
    profession: String,
    pinnedpost: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    channels: [{
        type: Schema.Types.ObjectId,
        ref: 'channel',
    }],
    job_applications:[{
        type: Schema.Types.ObjectId,
        ref: 'job_offer',
    }]
    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comments'
    // }],
    // posts:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Post'
    // }],
    // reactions: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Reaction'
    // }],

    
},
{timestamps: true,
    versionKey: false}
    )
    
const User=model('User', userSchema)
module.exports = User