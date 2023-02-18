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
        const post = await findPostById(savedPost.id);

        const totalPosts = await Post.find({ channel });
        const readPost = await IsRead.find({ uid, doc: { $in: totalPosts } });
        const count = totalPosts.length - readPost.length;

        io.emit(`${channel}-posts`, { post, count });

        return success(req, res, 'Post created successfully', post, 201);
    }

    return error(req, res, 'Post creation failed ', 400);
};

const updatePost = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    const { ...data } = req.body;

    try {
        const post = await Post.findById(id);
        if (!post) {
            return response.error(req, res, 'Post not found', 404);
        }

        const user = await User.findById(uid);

        if (!user.admin && post.author.toString() !== uid) {
            return response.error(req, res, 'Unauthorized user', 401);
        }

        const a = await Post.findByIdAndUpdate(
            { _id: id },
            { ...data },
            { new: true }
        );

        return response.success(req, res, 'Post updated', a, 200);
    } catch (error) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const PostsRemove = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    const { from, to, filter } = req.query;
    const regex = { $regex: filter, $options: 'i' };

    try {
        const removePost = await postsServices.remove(id);
        if (!removePost)
            return response.error(req,res,'There is a problem with the post that you want to remove!!',400);

        return response.success(req, res, 'Post deleted', removePost, 200);
    } catch (error) {
        console.log(error);
        if (error.message === 'no-privileges') {
            return response.error(req, res, 'Unauthorized User', 401);
        }

        return response.error(req, res, 'Post not found', 500);
    }
};

const postFavoriteUser = async (req, res) => {
    const uid = req.uid;
    const { id } = req.params;
    try {
        const user = await User.findById(uid);
        const post = await Post.findById(id);

        if (!post) {
            return response.error(req, res, 'Post not found', 400);
        }
        user.favorites.push(id);
        return response.success(req, res, 'Post Favorite saved', user);
    } catch (error) {
        return response.error(req, res, 'Post not found', 500);
    }
};

const getAll = async (req, res) => {
    const { from, to, filter } = req.query;

    const regex = { $regex: filter, $options: 'i' };
    const query = {
        $or: [{ title: regex }, { description: regex }]
    };
    try {
        const total = await Post.find();
        const post = await Post.find(filter ? query : {})
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

        res.set('Content-Range', total.length);

        return response.success(req, res, 'All post :', post, 200);
    } catch (e) {
        console.log(e);
        return response.error(req, res, 'Contact Admin', 500);
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
            .populate('reply', 'author body -replieOf');

        const commentsPopulated = comments.map((c) => {
            const { megusta, apoyar, meinteresa, hacergracia, ...data } =
                c.toJSON();

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
        return response.error(req, res, 'Contact Admin', 500);
    }
};
module.exports = {
    createPost,
    updatePost,
    PostsRemove,
    //postFavoriteUser,
    getAll,
    getComments
};
