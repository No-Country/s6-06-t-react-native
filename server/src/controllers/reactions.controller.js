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
        return response.success(req, res, 'Successful reaction', 200);
    } catch (error) {
        if (error.message === 'no-doc')
            return response.error(req, res, 'Document not found', 404);
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const remove = async (req, res) => {
    const io = req.app.locals.io;
    const uid = req.uid;
    const { id, scope } = req.params;
    //const { reaction } = req.body;

    try {
        const reactions = await reactionServices.remove(scope, id, uid);

        //io.emit('reaction-new-in-post', { reaction: newReaction });
        return response.success(req, res, 'Reaction successfully removed', 200);
    } catch (error) {
        if (error.message === 'no-doc')
            return response.error(req, res, 'Document not found', 404);
        return response.error(req, res, 'Contact Admin', 500);
    }
};

module.exports = {
    make,
    remove
};
