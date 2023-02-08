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
});

offerSchema.methods.toJSON = function idSetter() {
  const { _id, ...Offer } = this.toObject();
  Offer.uid = _id;
  return Offer;
};

const Offer = model("Offer", offerSchema);


module.exports=Offer




