const {Schema,model}=require("mongoose")

const channelSchema=new Schema({
name:{
  type:String,
  required:true,
  default:"general"
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

channelSchema.methods.toJSON = function idSetter() {
  const { _id, ...Channel } = this.toObject();
  Channel.uid = _id;
  return Channel;
};

const Channel = model("channel",channelSchema);

module.exports=Channel;

