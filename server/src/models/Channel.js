const {Schema,model}=require("mongoose")

const channelSchema=new Schema({
name:{
  type:String,
  required:true,
  default:"General"
},
posts:[{
  type:Schema.Types.ObjectId,
  ref: 'post'
}],
typechannel:{
  type:String,
  enum:["private","public"],
  default:"public"
}

})


module.exports=model("channel",channelSchema)