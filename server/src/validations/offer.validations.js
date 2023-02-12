const { param, check } = require("express-validator");
const { validateFields } = require("../middlewares");
const {validateDb}=require("../helpers")
const {Channel}=require("../models")

const create=[
    check("title", "title is required").not().isEmpty(),
    check("description", "description is required").not().isEmpty(),
    validateFields,
]

const edit=[
    param('id').isMongoId(),
    param("id").custom(async(id)=>await validateDb(Channel,"id",id)),
    check("title", "title is required").not().isEmpty(),
    validateFields,
]

const remove=[
    param('id').isMongoId(),
    validateFields,
]

const getByUser=[
    param('id').isMongoId(),
    validateFields,
]



module.exports={
    create,
    edit,
    remove,
    getByUser
}


