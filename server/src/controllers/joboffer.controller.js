const { User, JobOffer, Comment, Channel } = require('../models');
const { response } = require('../helpers');

const getJobOffers = async (req, res) => {
    const { filter, from, to } = req.query;

    const regex = { $regex: filter, $options: 'i' };
    const query={
        $or: [{ typechannel: regex }, { name: regex }]
    }

    try {
        const total = await JobOffer.find();

        const allOffers = await JobOffer.find(filter?query:{})
            .skip(Number(from))
            .limit(Number(to))
            .populate('countCandidates')
            //.populate({ path: 'candidates', select: 'fullName -postulations' })
            .populate('countComments');
        // .populate({ path: 'comments', select: 'body -job_offer' });
        res.set('Content-Range', total.length);
        return response.success(req,res,'Offers obtained successfully',allOffers,200);
    } catch (error) {
        
        return response.error(req, res, 'Contact Admin', 500);
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

        return response.success(req,res,'Offer created successfully',offer,201);
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const createComment = async (req, res) => {
    const { id } = req.params;
    const uid = req.uid;
    const { body } = req.body;
    try {
        const postComment = await JobOffer.findById(id);
        if (!postComment) {
            return response.error(req, res, 'Post not found', 400);
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

        return response.success(req,res,'Comment created successfully',postToUpdate,201);
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const updateJobOffer = async (req, res) => {
    const { id } = req.params;
    const { ...data } = req.body;
    try {
        const updatedJobOffer = await JobOffer.findByIdAndUpdate(
            { _id: id },
            { ...data },
            { new: true }
        );
        if (!updatedJobOffer) {
            return response.error(req,res,'Offer not found',updatedJobOffer,404);
        }
        return response.success(req,res,'Offer modified successfully',updatedJobOffer,200);
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const deleteJobOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteOffer = await JobOffer.findByIdAndDelete(id);

        if (!deleteOffer) {
            return response.error(req, res, 'Offer not found', 404);
        }
        return response.success(req, res, 'offer successfully removed', 200);
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const postulateOffer = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    try {
        const user = await User.findById(uid);
        const offer = await JobOffer.findById(id);
        

        if (!user) {
            return response.error(req, res, 'User not found', 404);
        }
        if (!offer) {
            return response.error(req, res, 'Offer not found', 404);
        }
        if (!user.selected) {
            return response.error(req, res, 'You cant apply', 400);
        }

        user.postulations.push(id);

        await user.save();

        return response.success(req, res, 'Successfully application', 200);
    } catch (error) {
        
        return response.error(req, res, 'Contact Admin', 500);
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
