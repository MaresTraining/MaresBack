import mongoose from 'mongoose';

const evaluationsSchema = mongoose.Schema({
  id: {type: String},
 // studentID:{type: Number},
  //OpportunityID :{type: Number},
  Comment: {type: String},
  numOiStars:{type: Number},
});

export default mongoose.model("evaluations",evaluationsSchema);
