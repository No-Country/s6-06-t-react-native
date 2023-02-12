const {User, JobOffer, Comment} = require('../models');
const {response} = require('../helpers');
console.log(typeof JobOffer)

const getJobOffers = async (req,res) => {
    
    try{
    
        const offer = await JobOffer.find({channel: '63e7f448a2801292083251d5'})

        const selectedUsers = await User.find({selected: true});
        if(!selectedUsers.length > 0) return response.error(req,res,"usuario no atuorizado",400);
        
        const selectedUsersIds = selectedUsers.map(user => user.id);

        
        const postulationsPromises = offer.map(async item => {
            const count = await User.countDocuments({_id: item._id, candidates: {$in: selectedUsersIds}});
            return {item, postulationsCount: count};
        });
        const postulations = await Promise.all(postulationsPromises);
        console.log(postulations)

    
        const commentsPromises = offer.map(async item =>{
            const count = await Comment.countDocuments({job_offer: item._id})
            return {item, commentsCount: count}
        })

        const comment = offer.map(async item =>{
            const showComments = await Comment.find({post: item.id})
            showComments.map(items => {
                items.replies.push(item.id)
                console.log(items)
            })
        })
        console.log(comment)
        const comments = await Promise.all(commentsPromises);
        console.log(comments)

        const result = offer.map(item => {
            const postulationsResult = postulations.find(x => x.item._id.equals(item._id));
            const commentsResult = comments.find(x => x.item._id.equals(item._id));            
            return{
                ...item.toObject(),
                postulationsCount: postulationsResult ? postulationsResult.postulationsCount : 0,
                commentsCount: commentsResult ? commentsResult.commentsCount: 0
                
            }
        })

        return response.success(req,res, "offertas obtenidas con éxito",result, 200)
    }catch(error){
        console.log(error)
    return response.error(req,res,"error en el servidor",500)
    };
}


const createPostulation = async (req, res) => {

    const { body, title } = req.body;
    
    try{

        const offer = new JobOffer({
            title,
            body           
        });
    
        await offer.save()

        return response.success(req,res,"postulación creada con éxito",offer,201)

    }catch(error){
        
        return response.error(req,res,"error en el servidor",500)
    }

}

const createComment = async (req,res) => {
    
    const {id} = req.params;
    const uid = req.uid
    const {body} = req.body;
    try {
    
        const postComment = await JobOffer.findById(id);
        if (!postComment) {
            return response.error(req, res, "Post no encontrado", 400);
        }
    
        const comment = new Comment({
            post: id,
            body,
            author: uid,
        });
        await comment.save();
    
        const postToUpdate = await JobOffer.findByIdAndUpdate(id,{$push: {comment:comment.id}}, {new:true});
        
    
    
        return response.success(
            req,
            res,
            "Comentario creado con éxito",
            postToUpdate,
            201
        );
    } catch (error) {
    return response.error(req, res, error.message, 500);
    }
}

const updateJobOffer = async (req,res) => {
    const {id} = req.params;
    const {title, description} = req.body
    try{
        const updatedJobOffer = await JobOffer.findByIdAndUpdate(
            {_id: id},
            {title,description},
            {new: true}
        );
        if(!updatedJobOffer){
            return response.error(req,res,"Oferta no encontrado",updatedJobOffer,404)
        }
        return response.success(req,res,"Oferta modificada con éxito",updatedJobOffer,200)
    }catch(error) {
        return response.error(req, res, error.message, 500);
    }
}

const deleteJobOffer = async (req,res) => {
        const { id } = req.params;
    
    try {
        const deleteOffer = await JobOffer.findByIdAndUpdate(id,{$set:{active:false}},{new:true});
    
        if (!deleteOffer) {
            return response.error(req, res, "Oferta no encontrado", 404);
        }
        return response.success(req, res, "Oferta eliminada exitosamente", 200);
    } catch (error) {
        return response.error(req, res, "Error al eliminar el comentario", 500);
    }
};



module.exports = {
    getJobOffers,
    createComment,
    createPostulation,
    updateJobOffer,
    deleteJobOffer
}