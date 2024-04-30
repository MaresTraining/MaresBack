import mongoose from 'mongoose';

const applicationSchema= mongoose.Schema({
  id: {type: String},
  OpportunitiesId: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  StID: [{ type: Schema.Types.ObjectId, ref: 'user' }]


});

export default mongoose.model("application",applicationSchema);
