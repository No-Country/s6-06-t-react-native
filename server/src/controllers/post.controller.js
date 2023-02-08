const { response        } = require("../helpers/response.js")   
import { findById, newPost, } from '../services/post.service.js';

const createPost = async (req, res) => {
    const { body } = req;

    const { uid } = req;

    let savedPost = {};

    try {
        savedPost = await newPost({ uid, body });
    } catch (err) {
        return serverError({
            res,
            message: err.message,
        });
    }

    if (Object.keys(savedPost).length > 0) {
        const post = await findById(savedPost.uid);

        return success({
            res,
            message: 'post created successfully',
            data: post,
        });
    }

    return error({
        res,
        message: 'post creation failed',
    });
};