const express = require('express');
const router = express.Router();
const {validatorJWT, isAdmin} = require('../middlewares');
const {verifyOffer} = require('../validations');
const {jobOffer} = require('../controllers')


//get obtiene todas las ofertas con cantidad de postulaciones y comentarios -validate jwt -si es seleccionado
router.get('/alloffers', validatorJWT, jobOffer.getJobOffers)
//post se postula a una oferta 


//put edita oferta---Como admin 
router.put('/:id/edit', validatorJWT, isAdmin, verifyOffer.edit, jobOffer.updateJobOffer)

//delete borra oferta -como admin
router.put('/:id/delete', validatorJWT,isAdmin,verifyOffer.remove, jobOffer.deleteJobOffer)

//post crea una oferta -como admin
router.post('/new', validatorJWT, isAdmin, verifyOffer.create, jobOffer.createPostulation)

router.post('/:id/newcomment', validatorJWT, jobOffer.createComment)

module.exports = router;