const { success, error  } = require('../helpers/response.js')
const { findPostById, newPost} =require('../services/post.services.js');

const createPost = async (req, res) => {
    const { body } = req;

    const { uid } = req
    console.log(req.uid, req.body)
    let savedPost = {};

       savedPost = await newPost({ uid, body });   
    if (Object.keys(savedPost).length > 0) {
        const post = await findPostById(savedPost.id);

        return success(
            req,
            res,
            'post created successfully',
            post,
        );
    }

    return error(
        req,
        res,
        'post creation failed 2',
    );
};


module.exports = {
    createPost
}