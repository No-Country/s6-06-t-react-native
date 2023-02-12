const express = require('express');
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares');
const {verifyOffer} = require('../validations');
const {jobOffer} = require('../controllers')


//PAGINADO
//get obtiene todas las ofertas con cantidad de postulaciones y comentarios -validate jwt -si es seleccionado
router.get('/all', validatorJWT, jobOffer.getJobOffers)
//post se postula a una oferta 


//put edita oferta---Como admin 
router.put('/edit/:id', validatorJWT, isAdmin, verifyOffer.edit, jobOffer.updateJobOffer)

//delete borra oferta -como admin
router.put('/delete/:id', validatorJWT,isAdmin,verifyOffer.remove, jobOffer.deleteJobOffer)

//post crea una oferta -como admin
router.post('/new', validatorJWT, isAdmin, verifyOffer.create, jobOffer.createPostulation)




//Ruta para el front, para postularse
router.post('/postulate/:id', validatorJWT, jobOffer.postulateOffer)


//HACERLO EN NEW COMMENT
///router.post('/:id/newcomment', validatorJWT, jobOffer.createComment)

module.exports = router;