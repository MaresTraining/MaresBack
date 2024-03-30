import mongoose from 'mongoose';

const FAQsSchema = mongoose.Schema({
  id: {type: String},
  AnswersID:{type: Number},
  QuestionsiD:{type: Number},
  Answers :{type: String},
  Questions: {type: String},
});

export default mongoose.model("FAQs",FAQsSchema);
