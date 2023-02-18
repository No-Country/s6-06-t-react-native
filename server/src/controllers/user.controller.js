const { response } = require('../helpers');
const { User, Post, JobOffer } = require('../models');

const editUser = async (req, res) => {
    const { id } = req.params;
    const { ...body } = req.body;
    try {
        const user = await User.findById(id);

        if (!user) {
            response.error(req, res, 'User not found', 400);
        }
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { ...body },
            { new: true }
        );
        return response.success(req, res, 'Updated user', updatedUser, 200);
    } catch (error) {
        console.log(error);
        response.error(req, res, 'Contact Admin', 500);
    }
};
const getAll = async (req, res) => {
    const { from, to,filter } = req.query;

    const regex = { $regex: filter, $options: 'i' };
    const query={
        $or: [{ fullName: regex }, { email: regex }]
    }
    

    try {
        const total=await User.find(filter?query:{})

        const users = await User.find()
            .skip(Number(from))
            .limit(Number(to))
            .populate({
                path: 'favorites',
                select: 'title'
            })
            .populate({
                path: 'channels',
                select: 'name'
            })
            .populate({
                path: 'favorites',
                select: 'title'
            })
            .populate({
                path: 'postulations',
                select: 'title'
            });

            res.set("Content-Range",total.length);

        return response.success(req, res, 'All users :', users, 200);
    } catch (e) {
        console.log(e);
        return response.error(req, res, 'Contact  Admin', 500);
    }
};

const otherUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select(
            'fullName email isOnline img_avatar'
        );
        if (!user) {
            return response.error(req, res, 'User not found', 400);
        }

        return response.success(req, res, 'Other user', user, 200);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'Contact Admin', 500);
    }
};

const models={
    post:Post,
    joboffer:JobOffer
}

const favorite=async(req,res)=>{
    const uid = req.uid;
    const { id,place } = req.params;
    try {



        const user = await User.findById(uid);
        const doc = await models[place].findById(id);
console.log(uid);
        if (!doc) {
            return response.error(req, res, 'Your document does not exist', 400);
        }
        user.favorites.push(doc.id);
        await user.save()
        return response.success(req, res, 'Post Favorite saved', user);
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'Post not found', 500);
    }

}

const deleteOne=async(req,res)=>{
    const { id } = req.params;
    try {

        const user = await User.findByIdAndRemove(id);

        if (!user) {
            return response.error(req, res, 'User not found', 404);
        }

        

        
        return response.success(req, res, 'User removed successfully', user );
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'CONTACT ADMIN', 500);
    }


}

module.exports = {
    editUser,
    getAll,
    otherUser,
    favorite,
    deleteOne
};
