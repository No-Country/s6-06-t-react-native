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
  channel:{
    type:Schema.Types.ObjectId,
    ref: 'channel'
  }
});

offerSchema.methods.toJSON = function idSetter() {
  const { _id, ...Offer } = this.toObject();
  Offer.id = _id;
  return Offer;
};

const Offer = model("jobOffer", offerSchema);


module.exports=Offer




