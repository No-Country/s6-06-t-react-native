const { Schema, model} = require('mongoose')

const userSchema = new Schema ({
    fullName: {
        Type: String, 
    },
    email: {
        Type: String
    },
    password: {
        Type: String,
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
    availability: {
        Type: String,
        enum: [
            'Full-Time',
            'Mañana',
            'Tarde'
        ]
    },
    technologies: {
        Type: String,
        enum: [
            'HTML',
            'CSS',
            'Figma',
            'AdobeXD',
            'Framer X',
            'Photoshop',
            'Illustrator',
            'JavaScript',
            'TypeScript',
            'Python',
            'Java',
            'Go',
            'Vue.js',
            'Next.js',
            'React',
            'React Native',
            'Angular',
            'Jest',
            'Selenium',
            'Node.js',
            'Express.js',
            'Deno',
            'GraphQL',
            'Koa',
        ]
    },
    phone: {
        Type: Number
    },
    position: {
        Type: String,
        enum: [
            'fullstack',
            'backend',
            'frontend',
            'uiux'
        ]
    },
    img_avatar: {
        Type: String,
        // default: 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'  
    },
    // pinnedpost: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'post'
    // }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }],
    posts:[{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
    }]
}
    )
    
userSchema.methods.toJSON = function idSetter() {
    const { _id, ...User } = this.toObject();
    User.id = uid;
    return User;
};

const User = model('user', userSchema)

module.exports = User