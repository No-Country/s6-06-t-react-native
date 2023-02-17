const { response } = require('../helpers');
const { User, Post } = require('../models');

const getAll=async(req,res)=> {
    const {from,to}=req.query
    
    try {

        const users=await User.find().skip(Number(from)).limit(Number(to))





        return response.success(req,res,"All users :",users,200)
    } catch (e) {
        console.log(e);
        return response.error(req,res,"CONTACT  ADMIN",500)
        
    }



}


module.exports = { getAll };
