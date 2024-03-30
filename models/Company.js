import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
  id: {type: String},
  email: {type: String,  trim: true, minlength: 5, maxlength: 100, unique: true,required: true},
  password: {type: String,  trim: true, minlength: 8, required: true},
  CompanyName: {type:String},
  CompanySector: {type:String},
  CompanyField: {type:String},
  CommercialRegistrationNumber: {type:Number},
  FirstNameOfTheOfficial: {type:String},
  LastNameOfTheOfficial: {type:String},
  JobTitle: {type:String},
  CompanyAddress: {type:String},
  DescriptionCompany: {type:String},
  CompanyImage: {  type: Object, default: { url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png", publicId: null,}},
  SocialMedia: {type:String},
  address: {type: String},// اناقش البنات +وصف كتابي

});

export default mongoose.model("Company",companySchema);
