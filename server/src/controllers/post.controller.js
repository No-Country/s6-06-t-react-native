const { response } = require('../helpers');
const { success, error } = require('../helpers/response.js');
const { Post, Reaction } = require('../models');
const { findPostById, newPost } = require('../services/post.services.js');

const createPost = async (req, res) => {
    const io = req.app.locals.io;
    const { body } = req;
    const { channel } = req.params;
    const { uid } = req;
    const attached = req.files;
    let attachedFiles
    if(attached){
         attachedFiles = Object.entries(attached).map((i) => i[1]);
    }
    

    let savedPost = {};

    savedPost = await newPost(uid, body, channel, attachedFiles);
    if (Object.keys(savedPost).length > 0) {
        //Con esta funcion lo busca y lo popula
        const post = await findPostById(savedPost.id);

        io.emit('post-new', { post });

        return success(req, res, 'post created successfully', post, 201);
    }

    return error(req, res, 'post creation failed ', 400);
};

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

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const attached = req.files;
    let attachedFiles

    
    try {
        const post = await Post.findById(id);
        //TAL VER RUTA DISTINTA ACTUALIZAR ADJUNTOS?

        // const updatedPost = await Post.findByIdAndUpdate(
        //     { _id: id },
        //     {
        //         title,
        //         description,
        //         attached
        //     },
        //     { new: true }
        // );
        if (!post) {
            return res.status(404).json({
                success: false,
                error: `Post no existe!!`
            });
        }
        post.attached = [];

        if(attached){
            attachedFiles = Object.entries(attached).map((i) => i[1]);
            if (attachedFiles.length > 0) {
                await Promise.all(
                    attachedFiles.map(async (file) => {
                        return await updatePost(post, file);
                    })
                );
            }
       }
        
        post.title = title;
        post.description = description;

        response.success(req,res,"Post updated",post,200)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
module.exports = {
    createPost,
    reactionToPost,
    updatePost
};
