const {Schema,model}=require("mongoose")

const offerSchema=new Schema({
name:{
  type:String,
  required:true,
  default:"Sin Fronteras"
},
description:{
  type:String,
  required:true
},
comments:[{
  type:Schema.Types.ObjectId,
  ref: 'comment'
}]

})


module.exports=model("job_offer",offerSchema)




