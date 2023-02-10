const { Post, Comment, Reaction, Channel } = require("../models");
const {response}=require("../helpers")

const findPostById = async (id) => {
    const post = await Post.findById(id, ["title", "description", "attached"])
    .populate("user", "fullName")
    .populate("reactions", "type__Reaction")
    .populate("channel", "name")
    .populate("comments", "author");

    return post;
};

const newPost = async (id, body,channel) => {
    try {
    const post = new Post({
    ...body,
    user: id,
    });
    // const postComments = await Comment.findOneAndUpdate(
    //     { name: comments },
    //     { $set: { name: comments } },
    //     {
    //         upsert: true,
    //         new: true,
    //     }
    // );

    // if(!postComments)
    // postComments.post.push(post.id);
    // await postComments.save();

    // const postReactions = await Reaction.findOneAndUpdate(
    //     { name: reactions },
    //     { $set: { name: reactions } },
    //     {
    //         upsert: true,
    //         new: true,
    //     }
    // );
    // postReactions.post.push(post.id);
    // await postReactions.save();

    const postChannel = await Channel.findById(channel);

    postChannel.posts.push(post.id);

    await postChannel.save();

    // post.comments = postComments.id;
    // post.reactions = postReactions.id;
    post.channel=postChannel.id//NO CREO Q SEA NECESARIO GUARDARLO ACA

    const savedPost = await post.save();
    return savedPost;

    } catch (error) {
    console.log("XXXXXXXXXXXX", error);
    response.error(req,res,"CONTACT ADMIN",500)
    }
};

module.exports = {
    newPost,
    findPostById,
};
