const { response } = require('../helpers');
const { User, Post } = require('../models');

const search = async (req, res) => {
    const uid = req.uid;
    const { search } = req.query;
    const regex = { $regex: search, $options: 'i' };

    try {
        const { channels } = await User.findById(uid);
       
        const results = await Promise.all([
            User.find({ $or: [{ fullName: regex }, { email: regex }] }).limit(
                10
            ),
            Post.find({
                $or: [{ title: regex }, { description: regex }],
                channel: channels
            })
                .limit(10)
                .populate({
                    path: 'author',
                    select: 'fullName position isOnline img_avatar'
                })
        ]);

        return response.success(req, res, 'Results:', results);
    } catch (e) {
        return response.error(req, res, 'Contact Admin', 500);
    }
};

module.exports = { search };
