const { Post, Comment, Reaction, Channel } = require('../models');


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


const newPost = async (id, body) => {
    console.log(id, body, Post)

    try {


        const {
            title,
            description,
            attached,
            comments,
            reactions,
            channel
        } = body

        const post = new Post({
            ...body,
            user: id,
        });
      

        console.log(post.channel,"COMENT")
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

        const postChannel = await Channel.findOneAndUpdate(
            { name: channel },
            { $set: { name: channel } },
            {
                upsert: true,
                new: true,
            }
        );
        postChannel.post.push(post.id);
        await postChannel.save();

          // post.comments = postComments.id;
        // post.reactions = postReactions.id;
        //post.channel = postChannel.id;

        const savedPost = await post.save();


        return savedPost
    }
    catch (error) {
        console.log("XXXXXXXXXXXX", error)
    }
};


module.exports = {
    newPost,
    findPostById
};