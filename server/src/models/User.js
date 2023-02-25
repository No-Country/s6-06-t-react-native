const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        emailisvalidated: {
            type: Boolean,
            default: true //TODO:CAMBIAR EN PRODUCCION
        },
        admin: {
            type: Boolean,
            default: true //TODO:CAMBIAR EN PRODUCCION
        },
        selected: {
            type: Boolean,
            default: true //TODO:CAMBIAR EN PRODUCCION
        },
        active: {
            type: Boolean,
            default: true
        },
        isOnline: {
            type: Boolean,
            default: true
        },
        lastSeen: {
            type: Number
        },
        socketId: {
            type: String
        },
        ///////////////////////////////////////////////////////////////////////
        position: {
            type: String,
            enum: [
                'Desarrollador/a Back-end',
                'Desarrollador/a Front-end',
                'Diseñador/a UX UI',
                'Diseñador/a UI',
                'Project Manager',
                'Team Leader',
                'Tester',
                'Otro'
            ]
        },
        img_avatar: {
            type: String,
            default:
                'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon.png'
        },
        availability: {
            type: String,
            enum: ['Full-Time', 'Mañana', 'Tarde']
        },
        jobArea: {
            type: String,
            enum: [
                'Análisis de datos',
                'Desarrollo de Software  - Front / Back',
                'Diseño',
                'Testing',
                'Otros'
            ]
        },
        aboutme: {
            type: String
        },
        workExperience: [
            {
                jobTitle: {
                    type: String
                },
                jobType:{
                    type:String
                },
                company:{
                    type:String
                },
                location:{
                    type:String
                },
                yearIn:{
                    type:String
                },
                yearOut:{
                    type:String
                },
                current:{
                    type:Boolean
                },
                description:{
                    type:String
                }

            }
        ],
        education: [
            {
                educationalLevel: {
                    type: String
                    // enum: [
                    //     'Secundario completo',
                    //     'Secundario incompleto',
                    //     'Universitario completo',
                    //     'Universitario en curso',
                    //     'Estudiante autodidacta',
                    //     'Otros'
                    // ]
                },
                educationTitle: {
                    type: String
                },
                institute: {
                    type: String
                },
                educationStatus: {
                    type: String
                },
                inCourse: {
                    type: Boolean
                },

                year_in: {
                    type: String
                },
                year_out: {
                    type: String
                }
            }
        ],
        languages: [
            {
                type: String
            }
        ],
        technologies: [
            {
                type: String,
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
                    'Koa'
                ]
            }
        ],
        softSkills: [
            {
                type: String
            }
        ],
        phone: {
            type: String
        },
        /////////////////////////////////////////////////////////////////////////
        favorites: [
            {
                type: Schema.Types.ObjectId,
                ref: 'post'
            }
        ],
        channels: [
            {
                type: Schema.Types.ObjectId,
                ref: 'channel'
            }
        ],
        postulations: [
            {
                type: Schema.Types.ObjectId,
                ref: 'jobOffer'
            }
        ]
    },
    {
        toObject: { virtuals: false }, //console
        toJSON: { virtuals: true }, //res
        timestamps: true,
        versionKey: false
    }
);

userSchema.methods.toJSON = function idSetter() {
    const { _id, ...User } = this.toObject();
    User.uid = _id;
    return User;
};

const User = model('user', userSchema);

module.exports = User;
