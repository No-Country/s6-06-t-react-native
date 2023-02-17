const express = require("express");
const router = express.Router();
const { user } = require("../controllers");

const { validatorJWT,isAdmin } = require("../middlewares");

//put editar usuario como ADmin-Validar admin  LO PONE EN SELECCIONADO Y AGREGA CANAL REQUERIMEINTOS

//get obtiene todos los usuarios con todo completo -validar admin

//router.get("/",validatorJWT,isAdmin,uset.getAll)


//get info de un usuario como otro usuario



