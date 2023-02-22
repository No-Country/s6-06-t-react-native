const { param, check } = require("express-validator");
const { validateFields } = require("../middlewares");
const { validateDb } = require("../helpers")
const { Post } = require("../models")

const create = [
    check("title", "title is required").not().isEmpty(),
    check("title").custom(async (title) => await validateDb(Post, "title", title)),
    check("description", "description is required").not().isEmpty(),
    check("description").custom( async (description) => await validateDb(Post, "description", description)),
    validateFields,
]

const edit = [
    param('id').isMongoId(),
    param("id").custom(async (id) => await validateDb(Post, "id", id)),
    check("title", "title is required").not().isEmpty(),
    check("title").custom(async (title) => await validateDb(Post, "title", title)),
    check("description", "description is required").not().isEmpty(),
    check("description").custom(async (description) => await validateDb(Post, "description", description)),
    validateFields,
]

const remove = [
    param('id').isMongoId(),
    validateFields,
]


module.exports = {
    create,
    edit,
    remove,
}

