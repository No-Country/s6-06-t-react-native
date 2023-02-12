const {Schema,model}=require("mongoose")

const offerSchema=new Schema({
  candidates: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],
  title: {
      type: String,
      required: true
  },
  description: {
      type: String,
      //required: true
  },
  comments: [{
      type: Schema.Types.ObjectId,
      ref: 'comment'
  }],
  channel: [{
      type: Schema.Types.ObjectId,
      ref: 'channel'
  }],
  attached: [String],
  active: {
      type: Boolean,
      default: true
  },
  
});

offerSchema.methods.toJSON = function idSetter() {
  const { _id, ...Offer } = this.toObject();
  Offer.id = _id;
  return Offer;
};

const Offer = model("jobOffer", offerSchema);


module.exports=Offer




