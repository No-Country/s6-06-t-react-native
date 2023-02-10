const { response } = require('../helpers');
const { success, error  } = require('../helpers/response.js');
const { Post, Reaction } = require('../models');
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



const reactionToPost=async(req,res)=>{
    const uid=req.uid
    const { id } = req.params;
    const {reaction}=req.body
  
    try {
      const post = await Post.findById(id);
  
      if (!post) {
        return response.error(req, res, "Post no encontrado", 404);
      }
  
      const newReaction=await new Reaction({
        user:uid,
        type__Reaction:reaction
      }).save()
 
      await Post.findByIdAndUpdate(
        id,
        { $push: { reactions: newReaction.id } },
      );
  
      return response.success(req, res, "Reaccion  exitosa", 200);
    } catch (error) {
      return response.error(req, res, error.message, 500);
    }
  
  }

module.exports = {
    createPost,
    reactionToPost
}