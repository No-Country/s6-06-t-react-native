const {Schema,model}=require("mongoose")

const channelSchema=new Schema({
name:{
  type:String,
  required:true,
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

},
{ timestamps: true, versionKey: false })

channelSchema.methods.toJSON = function idSetter() {
  const { _id, ...Channel } = this.toObject();
  Channel.id = _id;
  return Channel;
};

const Channel = model("channel",channelSchema);

module.exports=Channel;

