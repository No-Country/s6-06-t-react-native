const {Comment, Post} = require('../models');
const {response} = require('../helpers')
const { existingComment } = require('../helpers/validateDb');

const createComment = async (req, res) => {
    try{
        const uid = req.uid;
        
        const post = await Post.findById(req.body.post);
        if (!post){
            return response.error(req,res,"Post no encontrado",400)
        }
    
        const comment = new Comment({
            post: req.body.post,
            body: req.body.body,
            author: uid
        });
        

        const savedComment = await comment.save()
        console.log(savedComment)
        return  response.success(req, res, "Comentario creado con éxito",savedComment,201)
            

    }catch(error){
        return response.error(req, res, error.message, 500)
    }
}

const updateComment = async (req, res) => {
    
    
    try{
        const {body} = req.body;
        const {id} = req.params;
        const uid = req.uid
        const validate =  existingComment(id)
        if (!validate) {
            return response.error(req, res, "No válido")
        }
        
    
        // para traer middleware
        const comment = await Comment.findById(id);
        
        if (comment.author.toString() !== uid){
            return response.error(req, res, "No tienes permiso para actualizar este comentario", 401);
        }
        //
        const updatedComment= await Comment.findByIdAndUpdate(
            {_id: id},
            {body},
            {new: true}
        );
        if (!updatedComment){
            return response.error(req,res,"Comentario no encontrado")
        }
        return response.success(req,res,"comentario modificado exitosamente", updatedComment,201)
    }catch(error){
        return response.error(req,res,error.message,500)
        
    }
}

const deleteComment = async (req, res) => {
    try{
        const {id} = req.params;
        const uid = req.uid
        
        const comment = await Comment.findById(id);

        if (!comment){
            return response.error(req,res,"Comentario no encontrado", 404)    
        }

        if(comment.author.toString() !== uid){
            return response.error(req, res,"Usuario no autorizado", 401)
        }

        await comment.remove();
        return response.success(req,res,"Comentario eliminado exitosamente",200)
    
    }catch(error){
        return response.error(req,res,error.message,500)
    }
}

const admDeleteComment = async (req,res) => {
    try{
        const {id} = req.params;

        const admDeleteComment = await Comment.findByIdAndRemove(id);

        if(!admDeleteComment){
            return response.error(req,res,"Comentario no encontrado", 404)
        }
        return response.success(req,res,"Comentario eliminado exitosamente",200)
    }catch(error){
        return response.error(req,res,"Error al eliminar el comentario",500)
    }
    console.log(error)
}

    module.exports = {
    createComment,
    updateComment,
    deleteComment,
    admDeleteComment
}