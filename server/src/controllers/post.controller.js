const { response } = require('../helpers');
const { success, error } = require('../helpers/response.js');
const { Post, Reaction } = require('../models');
const { findPostById, newPost } = require('../services/post.services.js');

const createPost = async (req, res) => {
    const io = req.app.locals.io
    const { body } = req;
    const { channel } = req.params;
    const { uid } = req
    console.log(req.uid, req.body)
    let savedPost = {};

    savedPost = await newPost(uid, body, channel);
    if (Object.keys(savedPost).length > 0) {

        //Con esta funcion lo busca y lo popula
        const post = await findPostById(savedPost.id);

        io.emit('post-new', { post })

        return success(
            req,
            res,
            'post created successfully',
            post,
            201
        );
    }

    return error(
        req,
        res,
        'post creation failed ',
        400
    );
};



const reactionToPost = async (req, res) => {
    const io = req.app.locals.io
    const uid = req.uid
    const { id } = req.params;
    const { reaction } = req.body

    try {
        const post = await Post.findById(id);

        if (!post) {
            return response.error(req, res, "Post no encontrado", 404);
        }

        const newReaction = await new Reaction({
            user: uid,
            type__Reaction: reaction
        }).save()

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { $push: { reactions: newReaction.id } }, { new: true }
        );
        io.emit('reaction-new-in-post', { post: updatedPost })
        return response.success(req, res, "Reaccion  exitosa", 200);
    } catch (error) {
        return response.error(req, res, error.message, 500);
    }

}


const updatePost = async (req, res) => {

    const { id } = req.params;
    const { title,
        description,
        attached } = req.body

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            { _id: id },
            {
                title,
                description,
                attached,
            },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                error: `Post no existe!!`,
            });
        }
        res.status(200).json({
            success: true,
            data: updatedPost,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}
module.exports = {
    createPost,
    reactionToPost,
    updatePost
}