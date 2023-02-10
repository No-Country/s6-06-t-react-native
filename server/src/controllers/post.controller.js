const { success, error  } = require('../helpers/response.js')
const { findPostById, newPost} =require('../services/post.services.js');

const createPost = async (req, res) => {
    const { body } = req;
    const uid = req.uid;
    const {channel}=req.params

    let savedPost 

    try {
        savedPost = await newPost( uid, body,channel );
    } catch (err) {
        return error(
            req,
            res,
            "CONTACT ADMIN",
            500
        );
    }


    if (Object.keys(savedPost).length > 0) {

        //Con esta funcion lo busca y lo popula
        const post = await findPostById(savedPost.id);

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


module.exports = {
    createPost
}