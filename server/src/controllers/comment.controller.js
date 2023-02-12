const { Comment, Post, Reaction } = require('../models');
const { response } = require('../helpers');

const createComment = async (req, res) => {
    const io = req.app.locals.io;
    const uid = req.uid;
    const { body } = req.body;
    const { id, place } = req.params;
    try {

      //VALIDAR POST O COMENTARIO
        const isInPost = await Post.findById(id);
        const isInComment = await Comment.findById(id);
        if (!isInPost && !isInComment) {
            return response.error(req, res, 'Post no encontrado', 400);
        }

        let comment = new Comment({
            body,
            author: uid
        });

        if (place === 'post') {
            comment.post = id;
        } else if (place === 'comment') {
            comment.replieOf = id;
        }

        const savedComment = await comment.save();

        io.emit('comment-new', { savedComment });

        return response.success(
            req,
            res,
            'Comentario creado con éxito',
            savedComment,
            201
        );
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};

const updateComment = async (req, res) => {
    const { body } = req.body;
    const { id } = req.params;
    const uid = req.uid;

    try {
        ////SACAR A VALIDATOR
        // const validate = existingComment(id);
        // if (!validate) {
        //   return response.error(req, res, "No válido");
        // }

        // para traer middleware
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comentario no encontrado');
        }

        if (comment.author.toString() !== uid) {
            return response.error(
                req,
                res,
                'No tienes permiso para actualizar este comentario',
                401
            );
        }

        const updatedComment = await Comment.findByIdAndUpdate(
            { _id: id },
            { body },
            { new: true }
        );

        return response.success(
            req,
            res,
            'comentario modificado exitosamente',
            updatedComment,
            201
        );
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};

const deleteComment = async (req, res) => {
    const { id } = req.params;
    const uid = req.uid;

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comentario no encontrado', 404);
        }

        if (comment.author.toString() !== uid) {
            return response.error(req, res, 'Usuario no autorizado', 401);
        }

        await Comment.findByIdAndUpdate(
            id,
            { $set: { active: false } },
            { new: true }
        );

        return response.success(
            req,
            res,
            'Comentario eliminado exitosamente',
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
        const admDeleteComment = await Comment.findByIdAndUpdate(
            id,
            { $set: { active: false } },
            { new: true }
        );

        if (!admDeleteComment) {
            return response.error(req, res, 'Comentario no encontrado', 404);
        }
        return response.success(
            req,
            res,
            'Comentario eliminado exitosamente',
            200
        );
    } catch (error) {
        return response.error(req, res, 'Error al eliminar el comentario', 500);
    }
};

const replyComment = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    const { message } = req.body;

    try {
        const comment = await Comment.findById(id);

        if (!comment) {
            return response.error(req, res, 'Comentario no encontrado', 404);
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
            'Respuesta a comentario exitosa',
            undefined,
            201
        );
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
            comment:id
        }).save();
       
        return response.success(req, res, 'Reaccion  exitosa', undefined, 201);
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }
};

module.exports = {
    createComment,
    updateComment,
    deleteComment,
    admDeleteComment,
    replyComment,
    reactionToComment
};
