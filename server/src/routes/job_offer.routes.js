const express = require('express');
const router = express.Router();
const { validatorJWT, isAdmin } = require('../middlewares');
const { verifyOffer } = require('../validations');
const { jobOffer } = require('../controllers')

router.use(validatorJWT)

router.get('/all', jobOffer.getJobOffers)
      .put('/edit/:id', isAdmin, verifyOffer.edit, jobOffer.updateJobOffer)
      .delete('/:id', isAdmin, verifyOffer.remove, jobOffer.deleteJobOffer)
      .post('/new', isAdmin, verifyOffer.create, jobOffer.createPostulation)
      .post('/postulate/:id', jobOffer.postulateOffer)

//FALTA:Obtiene cometarios de joboffer especifico con repliesy reacciones 

module.exports = router;