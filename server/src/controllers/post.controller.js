const { response } = require('../helpers');
const { success, error } = require('../helpers/response.js');
const { Post, User, IsRead, Comment } = require('../models');
const { postsServices } = require('../services');
const { findPostById, newPost } = require('../services/post.services.js');

const createPost = async (req, res) => {
    const io = req.app.locals.io;
    const { body } = req;
    const { channel } = req.params;
    const { uid } = req;
    const attached = req.files;
    let attachedFiles;
    if (attached) {
        attachedFiles = Object.entries(attached).map((i) => i[1]);
    }

    let savedPost = {};

    savedPost = await newPost(uid, body, channel, attachedFiles);

    if (Object.keys(savedPost).length > 0) {
        //Con esta funcion lo busca y lo popula
        const post = await findPostById(savedPost.id);

        const totalPosts = await Post.find({ channel });
        const readPost = await IsRead.find({ uid, doc: { $in: totalPosts } });
        const count = totalPosts.length - readPost.length;
        console.log(channel);
        io.emit(`${channel}-posts`, { post, count });

        return success(req, res, 'post created successfully', post, 201);
    }

    return error(req, res, 'post creation failed ', 400);
};

const updatePost = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({
                success: false,
                error: `Post no existe!!`
            });
        }

        const user = await User.findById(uid);

        if (post.author.toString() !== uid && !user.admin) {
            return response.error(req, res, 'Usuario no autorizado', 401);
        }

        // if (attached) {
        //     post.attached = [];
        //     attachedFiles = Object.entries(attached).map((i) => i[1]);
        //     if (attachedFiles.length > 0) {
        //         await Promise.all(
        //             attachedFiles.map(async (file) => {
        //                 return await updatePost(post, file);
        //             })
        //         );
        //     }
        // }

        user.updateOne()

        post.title = title;
        post.description = description;

        response.success(req, res, 'Post updated', post, 200);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const PostsRemove = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;

    try {
        const removePost = await postsServices.remove(id, uid);
        if (!removePost)
            return response.error(
                req,
                res,
                'Hay un problema con el post que quiere remover!!',
                400
            );

        return response.success(req, res, 'Post deleted', removePost, 200);
    } catch (error) {
        console.log(error);
        if (error.message === 'no-priviligies') {
            return response.error(req, res, 'Usuario no autorizado', 401);
        }

        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};

const postFavoriteUser = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    try {
        const user = await User.findById(uid);
        const post = await Post.findById(id);

        if (!post) {
            return response.error(req, res, 'No exite tu post', 400);
        }
        user.favorites.push(id);
        await user.save()
        return response.success(req, res, 'Post Favorite saved', user);
    } catch (error) {
        return response.error(req, res, 'Post no encontrado', 500);
    }
};

const getAll = async (req, res) => {
    const { from, to } = req.query;

    try {
        const post = await Post.find()
            .skip(Number(from))
            .limit(Number(to))
            .populate({
                path: 'author',
                select: 'fullName'
            })
            .populate({
                path: 'channel',
                select: 'name'
            });

        return response.success(req, res, 'All post :', post, 200);
    } catch (e) {
        console.log(e);
        return response.error(req, res, 'error de servidor', 500);
    }
};

const getComments = async (req, res) => {
    const { from, to } = req.query;
    const { id } = req.params;

    try {
        const comments = await Comment.find({ active: true, post: id })
            .populate({ path: 'author', select: 'fullName' })
            //.populate("reactions", "type__Reaction -comment")
            .populate('megusta')
            .populate('apoyar')
            .populate('meinteresa')
            .populate('hacergracia')
            .populate("reply", "author body -replieOf")

        const commentsPopulated = comments.map((c) => {
            const { megusta, apoyar, meinteresa, hacergracia, ...data }=c.toJSON();

            const obj = {
                reactions: {
                    megusta,
                    apoyar,
                    meinteresa,
                    hacergracia
                },
                ...data
            };

            return obj;
        });
console.log(commentsPopulated);
        return response.success(req, res, 'Comments :', commentsPopulated, 200);
    } catch (e) {
        console.log(e);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }
};
module.exports = {
    createPost,
    updatePost,
    PostsRemove,
    postFavoriteUser,
    getAll,
    getComments
};
