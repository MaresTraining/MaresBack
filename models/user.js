import mongoose from 'mongoose';
//هنا اغيرها لستيودنت
const userSchema = mongoose.Schema({
  firstname: {type: String},
  lastname:  {type: String},
  email: {type: String,  trim: true, minlength: 5, maxlength: 100, unique: true,required: true},
  password: {type: String,  trim: true, minlength: 8, required: true},
  id: {type: String},
  DateofBirth: {type:Date},
  PhoneNumber:{type:  Number},
  UniversityName: {type:String},
  CollegeName: {type:String},//4
  Major: {type:String},
  AcademicLevel: {type:String},
  GraduationDate: {type:Date},//6
  Language: {type:String},//7
  Discription: {type: String},//1
  CV: {type:Object},//2
  Certificates: {type: Object},//3
  TechnicalSkills: {type:String},
  JobRelatedSkills: {type:String},
  Tools: {type:String},
  AdministrativeSkills: {type:String},
  Experiences: {type:String},
  Address: {type: String},//وصف كتابي نفس الكومبني

});

userSchema.methods.saveUser = function() {
  return this.save(); // استخدام دالة save() المدمجة في Mongoose لحفظ البيانات في قاعدة البيانات
};


export default mongoose.model("user",userSchema);
