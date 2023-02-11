const { Post, Comment, Reaction, Channel, User } = require('../models');


const findPostById = async (id) => {
    const post = await Post.findById(id, [
        'title',
        'description',
        'attached'
    ])
        .populate(
            'user',
            'fullName'
        )
        .populate(
            'reactions',
            'type__Reaction'
        )
        .populate(
            'channel',
            'name'
        )
        .populate(
            'comments',
            'author'
        )


    return post;
};

const newPost = async ({ uid, body }) => {


    const {
        title,
        description,
        attached,
        comment
    } = body

    const post = new Post({
        title,
        description,
        attached,
        user: uid,
    });

    const postUser = await User.findById(uid);
    postUser.posts.push(post.uid);
    await postUser.save();
 


    postComment.post.push(post.uid);
    await postComment.save();



    console.log(uid, body, Comment, postComment)

    const savedPost = await post.save();
    return savedPost
};


module.exports = {
    newPost,
    findPostById
};