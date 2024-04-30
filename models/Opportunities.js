import mongoose from 'mongoose';

const Opportunitieschema = mongoose.Schema({
  id: {type: String},
  name: {type: String},
  // CompanyID: {type: Number},
  CompanyID: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
  GeneralSpecializationField: {type: String},
  SpecificSpecializationField: {type: String},
  OpportunityName: {type: String},
  TrainingType: {type: String},
  City: {type: String},
  CustomizedTrainingPlans: {type: Object},
  TrainingDuration: {type: Number},
  Semester: {type: String},
  startAndEndDates:{type:  Date},
  WorkingDays: {type: String},
  WorkingHours: {type: Number},
  TrainingHours: {type: Number},
  TrainingPlan: {type: String},
  NumberOfTrainees:{type:  Number},
  TrainingBonus: {type: Number},
  Description: {type: String},
  Duties: {type: String},
  Benefits: {type: String},
});

export default mongoose.model("Opportunities",Opportunitieschema);
