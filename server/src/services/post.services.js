const { Post, Comment, Reaction, Channel, User } = require("../models");
const {response}=require("../helpers");

const findPostById = async (id) => {
    const post = await Post.findById(id, ["title", "description", "attached"])
    .populate("author", "fullName")
    .populate("reactions", "type__Reaction")
    .populate("channel", "name")
    .populate("comments", "author");

    return post;
};

const newPost = async (uid, body, channel ) => {

    const {
        title,
        description,
        attached,
    } = body

    const post = new Post({
        title,
        description,
        attached,
        author: uid,
    });

    const postAuthor = await User.findById(uid);
    
    
    const postChannel = await Channel.findById(channel);

    post.channel = postChannel.id;
    post.user = postAuthor.uid;
    const savedPost = await post.save();
    return savedPost
};

module.exports = {
    newPost,
    findPostById,
};
