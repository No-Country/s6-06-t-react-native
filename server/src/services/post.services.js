const { Post, Comment, Reaction, Channel, User } = require('../models');
const { response } = require('../helpers');
const { uploadIMG } = require('../helpers/cloudinary');

const findPostById = async (id) => {
    const post = await Post.findById(id, ['title', 'description', 'attached'])
        .populate('author', 'fullName position isOnline img_avatar')
        // .populate("reactions", "type__Reaction")
        .populate('channel', 'name');
    //.populate("comments", "author");

    return post;
};

const newPost = async (uid, body, channel, files) => {
    const { title, description } = body;

    const post = new Post({
        title,
        description,
        author: uid
    });
    const postChannel = await Channel.findById(channel);

    post.channel = postChannel.id;

    if (files) {

        await Promise.all(
        files.map(async (file) => {
        return await uploadIMG(post, file);
        }))
    
}

    const savedPost = await post.save();
    return savedPost;
};

const remove = async (id) => {

    const post = await Post.findById(id);

    if(!post) return "no-post"

    if (post) {
        //PROBAR SI FUNCIONA !!!
        await Comment.deleteMany({ post: post.id });
        await Reaction.deleteMany({ post: post.id });
    }


    await post.deleteOne()

    
    return  post.id
};


module.exports = {
    newPost,
    findPostById,
    remove
};
