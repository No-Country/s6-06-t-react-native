const { User, JobOffer, Comment, Channel } = require('../models');
const { response } = require('../helpers');

const getJobOffers = async (req, res) => {
    const { type, from, to } = req.query;

    const prequery = {
        active: true,
        type
    };
    const query = !type ? { active: true } : prequery;
    ///VERIFICAR QUE SEA ORDEN DESCENDENTE
    try {
        const allOffers = await JobOffer.find(query)
            .skip(Number(from))
            .limit(Number(to))
            .populate('countCandidates')
            .populate({ path: 'candidates', select: 'fullName -postulations' })
            .populate('countComments')
            .populate({ path: 'comments', select: 'body -job_offer' });

        const offers = await Promise.all(
            allOffers.map(async (off) => {
                const candidates = await User.find({ postulations: off.id });
                const comments = await Comment.find({ job_offer: off.id });

                return {
                    ...off.toJSON(),
                    candidates: {
                        count: candidates.length,
                        data: candidates.map((item) => item.id)
                    },
                    comments: {
                        count: comments.length,
                        data: comments
                    }
                };
            })
        );

        // const selectedUsers = await User.find({ selected: true });
        // const selectedUsersIds = selectedUsers.map(user => user.id);

        // const jobOffers = await JobOffer.find({
        //     candidates: { $in: selectedUsersIds }
        // })
        //     .populate({ path: 'candidates', select: 'selected' })
        //     .populate({ path: 'comments', select: '_id' });

        // const result = jobOffers.map(offer => {
        // const offerCandidates = offer.candidates.filter(candidate => candidate.selected);
        //     return {
        //         ...offer.toObject(),
        //         postulationsCount: offerCandidates.length,
        //         commentsCount: offer.comments.length
        //     };
        // });

        return response.success(
            req,
            res,
            'ofertas obtenidas con éxito',
            allOffers,
            200
        );
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'error en el servidor', 500);
    }
};

const createPostulation = async (req, res) => {
    const uid = req.uid;
    const { description, title, type } = req.body;

    try {
        const channel = await Channel.findOne({ name: 'Requerimientos' });

        const offer = new JobOffer({
            channel: channel.id,
            title,
            description,
            type,
            author: uid
        });

        await offer.save();

        return response.success(
            req,
            res,
            'Oferta creada con éxito',
            offer,
            201
        );
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'error en el servidor', 500);
    }
};

const createComment = async (req, res) => {
    const { id } = req.params;
    const uid = req.uid;
    const { body } = req.body;
    try {
        const postComment = await JobOffer.findById(id);
        if (!postComment) {
            return response.error(req, res, 'Post no encontrado', 400);
        }

        const comment = new Comment({
            post: id,
            body,
            author: uid
        });
        await comment.save();

        const postToUpdate = await JobOffer.findByIdAndUpdate(
            id,
            { $push: { comment: comment.id } },
            { new: true }
        );

        return response.success(
            req,
            res,
            'Comentario creado con éxito',
            postToUpdate,
            201
        );
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};

const updateJobOffer = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const updatedJobOffer = await JobOffer.findByIdAndUpdate(
            { _id: id },
            { title, description },
            { new: true }
        );
        if (!updatedJobOffer) {
            return response.error(
                req,
                res,
                'Oferta no encontrado',
                updatedJobOffer,
                404
            );
        }
        return response.success(
            req,
            res,
            'Oferta modificada con éxito',
            updatedJobOffer,
            200
        );
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};

const deleteJobOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteOffer = await JobOffer.findByIdAndUpdate(
            id,
            { $set: { active: false } },
            { new: true }
        );

        if (!deleteOffer) {
            return response.error(req, res, 'Oferta no encontrado', 404);
        }
        return response.success(req, res, 'Oferta eliminada exitosamente', 200);
    } catch (error) {
        return response.error(req, res, 'Error al eliminar el comentario', 500);
    }
};

const postulateOffer = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    try {
        //esto sería lo mismo que const userId = req.user._id?? si pueden me comentan en discord porfas.. todavía no termino de entenderle bien jaj

        const user = await User.findById(uid);
        const offer = await JobOffer.findById(id);
        console.log(user);

        if (!user) {
            return response.error(req, res, 'usuario no encontrado', 404);
        }
        if (!offer) {
            return response.error(req, res, 'oferta no encontrada', 404);
        }
        if (!user.selected) {
            return response.error(req, res, 'no puedes postularte', 400);
        }

        user.postulations.push(id);

        await user.save();

        return response.success(req, res, 'postulación exitosa', 200);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'error en el servidor', 500);
    }
};

module.exports = {
    getJobOffers,
    createComment,
    createPostulation,
    updateJobOffer,
    deleteJobOffer,
    postulateOffer
};
