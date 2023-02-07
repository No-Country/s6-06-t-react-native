const { Schema, model} = require('mongoose')

const userSchema = new Schema ({
    username: String,
    email: String,
    password: String,
    admin: {
        type: Boolean,
        default: false 
    },
    selected: {
        type: Boolean,
        default: false},
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
        default: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'  
    },
    studies: String,
    area: String,
    profession: String,
    pinnedpost: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
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
    
const User = model('User', userSchema)
module.exports = User