const { response } = require('../helpers');
const { reactionServices } = require('../services');


const make = async (req, res) => {
    const io = req.app.locals.io;
    const uid = req.uid;
    const { id, scope } = req.params;
    const { reaction } = req.body;

    try {
        const reactions = await reactionServices.make(reaction, scope, id, uid);

        io.emit('reaction-new-in-post', { reaction: reactions });
        return response.success(req, res, 'Reaccion  exitosa', 200);
    } catch (error) {
        console.log(error);
        if (error.message === 'no-doc')
            return response.error(req, res, 'Documento no encontrado', 404);
        return response.error(req, res, error.message, 500);
    }
};


const remove = async (req, res) => {
    const io = req.app.locals.io;
    const uid = req.uid;
    const { id, scope } = req.params;
    //const { reaction } = req.body;

    try {
        const reactions = await reactionServices.remove( scope, id, uid);

        //io.emit('reaction-new-in-post', { reaction: newReaction });
        return response.success(req, res, 'Reaccion eliminada con exito', 200);
    } catch (error) {
        console.log(error);
        if (error.message === 'no-doc')
            return response.error(req, res, 'Documento no encontrado', 404);
        return response.error(req, res, error.message, 500);
    }
};

module.exports = {
    make,
    remove
    
};
