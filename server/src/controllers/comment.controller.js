const { Comment, Post } = require("../models");
const { response } = require("../helpers");
const { existingComment } = require("../helpers/validateDb");

const createComment = async (req, res) => {
  const uid = req.uid;
  const { body, post } = req.body;

  try {
    //NO ES MEJOR ENVIAR ID X PARAM?
    const postComment = await Post.findById(req.body.post);
    if (!postComment) {
      return response.error(req, res, "Post no encontrado", 400);
    }

    const comment = new Comment({
      post,
      body,
      author: uid,
    });

    const postToUpdate = await Post.findById(post);

    postToUpdate.comments.push(comment.id);

    await postToUpdate.save();

    const savedComment = await comment.save();

    return response.success(
      req,
      res,
      "Comentario creado con éxito",
      savedComment,
      201
    );
  } catch (error) {
    return response.error(req, res, error.message, 500);
  }
};

const updateComment = async (req, res) => {
  const { body } = req.body;
  const { id } = req.params;
  const uid = req.uid;

  try {
    ////SACAR A VALIDATOR
    // const validate = existingComment(id);
    // if (!validate) {
    //   return response.error(req, res, "No válido");
    // }

    // para traer middleware
    const comment = await Comment.findById(id);

    if (!comment) {
      return response.error(req, res, "Comentario no encontrado");
    }

    if (comment.author.toString() !== uid) {
      return response.error(
        req,
        res,
        "No tienes permiso para actualizar este comentario",
        401
      );
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      { _id: id },
      { body },
      { new: true }
    );

    return response.success(
      req,
      res,
      "comentario modificado exitosamente",
      updatedComment,
      201
    );
  } catch (error) {
    return response.error(req, res, error.message, 500);
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  const uid = req.uid;

  try {
    const comment = await Comment.findById(id);

    if (!comment) {
      return response.error(req, res, "Comentario no encontrado", 404);
    }

    if (comment.author.toString() !== uid) {
      return response.error(req, res, "Usuario no autorizado", 401);
    }

    await Comment.findByIdAndUpdate(
      id,
      { $set: { active: false } },
      { new: true }
    );

    return response.success(req, res, "Comentario eliminado exitosamente", 200);
  } catch (error) {
    return response.error(req, res, error.message, 500);
  }
};

const admDeleteComment = async (req, res) => {
    const { id } = req.params;

    try {
    const admDeleteComment = await Comment.findByIdAndUpdate(id,{$set:{active:false}},{new:true});

    if (!admDeleteComment) {
      return response.error(req, res, "Comentario no encontrado", 404);
    }
    return response.success(req, res, "Comentario eliminado exitosamente", 200);
  } catch (error) {
    return response.error(req, res, "Error al eliminar el comentario", 500);
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
  admDeleteComment,
};
