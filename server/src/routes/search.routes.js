const express = require("express");
const router = express.Router();
const { search } = require("../controllers");
const { validatorJWT } = require("../middlewares");


router.get("/",validatorJWT , search.search)

module.exports = router;