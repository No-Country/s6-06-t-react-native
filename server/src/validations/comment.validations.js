const { param, check } = require("express-validator");
const { validateFields } = require("../middlewares");
const { validateDb } = require("../helpers")
const { Comment } = require("../models")

const create = [
    check("body", "body is required").not().isEmpty(),
    //check("body").custom(async (body) => await validateDb(Comment, "body", body)),
    validateFields,
]

const edit = [
    param('id').isMongoId(),
    //param("id").custom(async (id) => await validateDb(Comment, "id", id)),
    check("body", "body is required").not().isEmpty(),
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


