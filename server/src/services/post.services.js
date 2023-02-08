
const newPost = async ({ id, body }) => {
    const {
        title,
        description,
        resource,
        date,
        programmingL,
        category,
        ranking,
        technology,
        tag,
        url,
    } = body;

    const post = new Post({
        title,
        description,
        resource,
        date,
        user: id,
        ranking,
        url,
    });

    const postUser = await User.findById(id);
    postUser.post.push(post.id);
    await postUser.save();

    const postLanguage = await ProgrammingL.findOneAndUpdate(
        { name: programmingL },
        { $set: { name: programmingL } },
        {
            upsert: true,
            new: true,
        }
    );
    postLanguage.post.push(post.id);
    await postLanguage.save();

    const postCategory = await Category.findOneAndUpdate(
        { name: category },
        { $set: { name: category } },
        {
            upsert: true,
            new: true,
        }
    );
    postCategory.post.push(post.id);
    await postCategory.save();

    const postTechnology = await Technology.findOneAndUpdate(
        { name: technology },
        { $set: { name: technology } },
        {
            upsert: true,
            new: true,
        }
    );
    postTechnology.post.push(post.id);
    await postTechnology.save();

    const postTag = await Tag.findOneAndUpdate(
        { name: tag },
        { $set: { name: tag } },
        {
            upsert: true,
            new: true,
        }
    );
    postTag.post.push(post.id);
    await postTag.save();

    post.category = postCategory.id;
    post.programmingL = postLanguage.id;
    post.technology = postTechnology.id;
    post.tag = postTag.id;

    const savedPost = await post.save();

    return savedPost;
};