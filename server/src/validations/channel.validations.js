const { param, check } = require("express-validator");
const { validateFields } = require("../middlewares");
const {validateDb}=require("../helpers")
const {Channel}=require("../models")

const create=[
    check("name", "name is required").not().isEmpty(),
    check("name").custom(async(name)=> await validateDb(Channel,"name",name)),
    validateFields,
  ]

  const edit=[
    param('id').isMongoId(),
    param("id").custom(async(id)=>await validateDb(Channel,"id",id)),
    check("name", "name is required").not().isEmpty(),
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


