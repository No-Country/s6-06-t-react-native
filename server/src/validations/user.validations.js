const { param, check } = require("express-validator");
const { validateFields } = require("../middlewares");
const { validateDb } = require("../helpers")
const { Post } = require("../models")

const create = [
    check("fullName", "fullName is required").not().isEmpty(),
    check("fullName").custom(async (fullName) => await validateDb(Post, "fullName", fullName)),
    check("email", "email is required").not().isEmpty(),
    check("email").custom(async (email) => await validateDb(Post, "email", email)),
    check('position')
        .optional()
        .isIn([
            'Desarrollador/a Back-end',
            'Desarrollador/a Front-end',
            'Diseñador/a UX UI',
            'Diseñador/a UI',
            'Project Manager',
            'Team Leader',
            'Tester',
            'Otro'
        ])
        .withMessage('Enter a valid position'),
    check('availability')
        .optional()
        .isIn([
            'Full-Time', 'Mañana', 'Tarde'
        ])
        .withMessage('Enter a valid availability'),
    check('jobArea')
        .optional()
        .isIn([
            'Análisis de datos',
            'Desarrollo de Software  - Front / Back',
            'Diseño',
            'Testing',
            'Otros'
        ])
        .withMessage('Enter a valid jobArea'),
    check('education')
        .optional()
        .isIn([
            'Secundario completo',
            'Secundario incompleto',
            'Universitario completo',
            'Universitario en curso',
            'Estudiante autodidacta',
            'Otros'
        ])
        .withMessage('Enter a valid education'),
    check('technologies')
        .optional()
        .isIn([
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
        ])
        .withMessage('Enter a valid technologies'),

        
    validateFields,
]

const edit = [
    param('id').isMongoId(),
    param("id").custom(async (id) => await validateDb(Post, "id", id)),
    check("fullName", "fullName is required").not().isEmpty(),
    check("fullName").custom(async (fullName) => await validateDb(Post, "fullName", fullName)),
    check("email", "email is required").not().isEmpty(),
    check("email").custom(async (email) => await validateDb(Post, "email", email)),
    check('position')
        .optional()
        .isIn([
            'Desarrollador/a Back-end',
            'Desarrollador/a Front-end',
            'Diseñador/a UX UI',
            'Diseñador/a UI',
            'Project Manager',
            'Team Leader',
            'Tester',
            'Otro'
        ])
        .withMessage('Enter a valid position'),
    check('availability')
        .optional()
        .isIn([
            'Full-Time', 'Mañana', 'Tarde'
        ])
        .withMessage('Enter a valid availability'),
    check('jobArea')
        .optional()
        .isIn([
            'Análisis de datos',
            'Desarrollo de Software  - Front / Back',
            'Diseño',
            'Testing',
            'Otros'
        ])
        .withMessage('Enter a valid jobArea'),
    check('education')
        .optional()
        .isIn([
            'Secundario completo',
            'Secundario incompleto',
            'Universitario completo',
            'Universitario en curso',
            'Estudiante autodidacta',
            'Otros'
        ])
        .withMessage('Enter a valid education'),
    check('technologies')
        .optional()
        .isIn([
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
        ])
        .withMessage('Enter a valid technologies'),
        validateFields,

]

const remove = [
    param('id').isMongoId(),
    validateFields,
]

const getByIdUser = [
    param('id').isMongoId(),
    validateFields,
]


module.exports = {
    create,
    edit,
    remove,
    getByIdUser
}

