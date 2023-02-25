const { Comment, User, Reaction } = require('../models');
const { response } = require('../helpers');
const { commentServices } = require('../services');

const createComment = async (req, res) => {
    const io = req.app.locals.io;
    const uid = req.uid;
    const { body } = req.body;
    const { id, place } = req.params;

    try {
        const comment = await commentServices.make(body, place, id, uid);

        io.emit('comment-new', { comment });

        return response.success(
            req,
            res,
            'Comment created successfully',
            comment,
            201
        );
    } catch (error) {
        if (error.message === 'no-doc')
            return response.error(req, res, 'Document not found', 404);
        return response.error(req, res, error.message, 500);
    }
};

const updateComment = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const uid = req.uid;

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comment not found', 404);
        }

        if (comment.author.toString() !== uid) {
            return response.error(
                req,
                res,
                'You dont have permission to update this comment',
                401
            );
        }

        const updatedComment = await Comment.findByIdAndUpdate(
            { _id: id },
            { ...body },
            { new: true }
        );

        return response.success(
            req,
            res,
            'Comment modified successfully',
            updatedComment,
            201
        );
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const deleteComment = async (req, res) => {
    const { id } = req.params;
    const uid = req.uid;

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comment not found', 404);
        }

        const user = await User.findById(uid);

        if (comment.author.toString() !== uid && !user.admin) {
            return response.error(req, res, 'Unauthorized User', 401);
        }

        await Comment.findByIdAndUpdate(
            id,
            { $set: { active: false } },
            { new: true }
        );

        return response.success(
            req,
            res,
            'Comment modified successfully',
            undefined,
            200
        );
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};

const admDeleteComment = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findById(id);

        if (comment) {
            //PROBAR SI FUNCIONA !!!
            await Comment.deleteMany({ replieOf: comment.id });
            await Reaction.deleteMany({ comment: comment.id });
        }
        const admDeleteComment = await Comment.findByIdAndDelete(id);

        if (!admDeleteComment) {
            return response.error(req, res, 'Comment not found', 404);
        }
        return response.success(req, res, 'Comment deleted successfully', 200);
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const replyComment = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    const { message } = req.body;

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comment not found', 404);
        }

        const reply = await new Comment({
            author: uid,
            body: message
        }).save();

        await Comment.findByIdAndUpdate(
            id,
            { $push: { replies: reply.id } },
            { new: true }
        );

        return response.success(
            req,
            res,
            'Reply to comment successfully',
            undefined,
            201
        );
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

module.exports = {
    createComment,
    updateComment,
    deleteComment,
    admDeleteComment,
    replyComment
};
