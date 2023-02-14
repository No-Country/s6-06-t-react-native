
const { Post, Reaction, Comment } = require('../models');

const reactionToPost = async (req, res) => {
    const io = req.app.locals.io;
    const uid = req.uid;
    const { id } = req.params;
    const { reaction } = req.body;

    try {
        const post = await Post.findById(id);

        if (!post) {
            return response.error(req, res, 'Post no encontrado', 404);
        }

        const newReaction = await new Reaction({
            user: uid,
            type__Reaction: reaction,
            post: id
        }).save();

        io.emit('reaction-new-in-post', { reaction: newReaction });
        return response.success(req, res, 'Reaccion  exitosa', 200);
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};

const reactionToComment = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    const { reaction } = req.body;

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comentario no encontrado', 404);
        }

        const newReaction = await new Reaction({
            user: uid,
            type__Reaction: reaction,
            comment: id
        }).save();

        return response.success(req, res, 'Reaccion  exitosa', undefined, 201);
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};




module.exports = {
    reactionToPost,
    reactionToComment
};
