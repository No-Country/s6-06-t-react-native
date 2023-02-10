const {Comment, User, Post} = require('../models');
const {response} = require('../helpers')
const { existingComment } = require('../helpers/validateDb');

const createComment = async (req, res) => {
    try{
        const uid = req.uid;
        console.log(uid)
        const post = await Post.findById(req.body.post);
        if (!post){
            return response.error(req,res,"Post no encontrado",400)
        }
    
        const comment = new Comment({
            post: req.body.post,
            author: uid,
            body: req.body.body
        });
        console.log(Comment)

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
        console.log(comment)
        if (comment.author === uid){
            return response.error(req, res, "No tienes permiso para actualizar este comentario", 401);
        }
        //
        const updatedComment= await Comment.findByIdAndUpdate(
            {_id: id},
            body,
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
        const {user} = req.body
        const comment = await Comment.findById(id);

        const user2 = await User.findById(req.body.user);
        if (!user2){
            return response.error(req,res,"El usuario no existe",400)
        }

        if (!comment){
            return response.error(req,res,"Comentario no encontrado", 404)    
        }

        if(comment.user !== user){
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
        const user = req.body.user

        if(!user.admin){
            return response.error(req,res,"No tienes permisos para realizar esta acción",401)
        }

        const admDeleteComment = await Comment.findByIdAndRemove(id);

        if(!admDeleteComment){
            return response.error(req,res,"Comentario no encontrado", 404)
        }
        return response.success(req,res,"Comentario eliminado exitosamente",200)
    }catch(error){
        return response.error(req,res,"Error al eliminar el comentario",500)
    }
}

    module.exports = {
    createComment,
    updateComment,
    deleteComment,
    admDeleteComment
}