const existInDb = async (model, key, ref) => {
    const element = await model.findOne({ [key]: ref });
    
    if (!element) {
    return true;
    } else {
        throw new Error("Ya esxiste en db");
    }
};

module.exports = existInDb;
