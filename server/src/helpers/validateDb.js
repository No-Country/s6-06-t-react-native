const {Channel} = require('../models')

const existInDb = async (ref) => {
    
    const element = await Channel.findOne({_id: ref})
  
    if (!element) {
        // return response.error(req,res,"El Canal no existe",400
        return false
    }
    return true

    
}

// const asd = (model) => {
    
// }
module.exports = existInDb