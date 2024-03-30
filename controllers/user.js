import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';

const secret = 'app';

export const signin = async (req, res) => { 
   //من الفرونت ناخذ
   const { email,password } = req.body;
   console.log(req.body);
   try {
      const existingUser = await user.findOne({email: email});
      console.log('existingUser: ', existingUser);
      if(!existingUser){
         console.log("uesr dosen't exist")
         return  res.status(404).json({message:"uesr dosen't exist"});
      } 
      
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
      
      if(!isPasswordCorrect){
         console.log("invalied Password")
         return  res.status(400).json({message:"invalied Password"});
      }
      const token = jwt.sign({email: existingUser.email, id:existingUser._id},secret,{expiresIn:"1h"});//app=env file
      console.log("user signed in")
      res.status(200).json({result: existingUser, token, message:"user signed in" });
   } catch (error) {
      console.log('ERROR')
      res.status(500).json({message:'حدث خطأ ما!'});
   } 
}

export const signup = async (req, res) => { 
   const {firstname, lastname, email, password, confirmPassword} = req.body;
   console.log(req.body) ;
    try {
       const existingUser = await user.findOne({email: email});
       console.log(existingUser);
       if(existingUser)
        return res.status(400).json({message:"الحساب موجود مسبقا!"});
   //اذا فيه ايرور ارجع لذا    
   function checkPassword(password, confirmPassword) {
      if (password === confirmPassword) {return true;} else { return false;}}
      checkPassword(password, confirmPassword);
       if(!checkPassword)
      //  if (password !== confirmPassword)
        return res.status(400).json({message:"كلمة المرور غير متطابقة"});
       
       const hashPassword = await bcrypt.hash(password,12);
       const result = await user.create({firstname, lastname,email,password: hashPassword });
       const token = jwt.sign({email: result.email, id:result._id},secret,{expiresIn:"1h"});//app=env file
       
       res.status(200).json({result, token, message:"New user added"});
   
    } catch (error) {
       res.status(500).json({message:'حدث خطأ ما!'});
       console.log(error);
    }
   };

export const test = async (req, res) => { 
   // const existingUser = await user.find();
   res.json("HELLO");
}

   export const resetPassword = async (req, res) => {
      const { email, newPassword } = req.body;
      try {
      const existingUser = await user.findOne({ email });
      if (!existingUser) 
        return res.status(404).sed("الحساب غير مسجل مسبقا!");
      
        const hashPassword = await bcrypt.hash(newPassword,12);
        const result = await user.update(user._id, { password: hashPassword });//ارجع له
        return res.status(200).json({message:"تم تغيير كلمة المرور بنجاح"});
      }
      catch (error) {
        console.log(error);
        return res.status(500).json({message:"حدث خطأ ما!"});
      }
   };

//   Discription: {type: String},//1
//   CV: {type:Object},//2
//   Certificates: {type: Object},//3
//   CollegeName: {type:String},//4
//   GraduationDate: {type:Date},//6
//   Major: {type:String},

//    export const CreateCV = async (req, res) => {
//       const { Discription, cv, Certificates, CollegeName, Major, GraduationDate} = req.body;
//       const existingUser = await user.create({
//          Discription, 
//          cv,
//          Certificates, 
//          CollegeName, 
//          Major, 
//          GraduationDate,
//          Language
//       })
//       if (existingUser) {
//         res.status(200).json({
//          Discription: user.Discription, 
//          cv: user.cv,
//          Certificates:user.Certificates , 
//          CollegeName: user.CollegeName, 
//          Major:user.Major, 
//          GraduationDate: user.GraduationDate,
//          Language: user.Language,
//          token: generateToken(user._id),
//         });
//       } else {
//         res.status(400);
//         throw new Error("User not found");
//       }
//       const result = await user.create({Discription, cv, Certificates, CollegeName, Major, GraduationDate});
//        const token = jwt.sign({email: result.email, id:result._id},secret,{expiresIn:"1h"});
//     };
//    //  firstname
//    //  lastname
//    //  PhoneNumber
//    //  DateofBirth
//    //  Address
//     export const updateProfile = async (req, res) => {
//       const {firstname, lastname,  PhoneNumber, DateofBirth, Address} = req.body;
//       // console.log(req.body);
//       // const existingUser = await user.findOne({ email });
//        console.log(req.body);
//      if (user) {
//       user.firstname = req.body.firstname ;
//       user.lastname = req.body.lastname; 
//       user.PhoneNumber = req.body.PhoneNumber ;
//       user.DateofBirth = req.body.DateofBirth ;
//       user.Address = req.body.Address; 
   
//       const updateUserProfile = await user.create();
//       res.json({
//          firstname: updateProfile.firstname, 
//          lastname: updateProfile.lastname,
//          PhoneNumber:updateProfile.PhoneNumber , 
//          DateofBirth: updateProfile.DateofBirth, 
//          Address:updateProfile.Address, 
//          token: jwt.updateProfile({firstname: result.firstname,lastname: result.lastname,PhoneNumber: result.PhoneNumber,DateofBirth: result.DateofBirth,Address: result.DateofBirth, id:result._id},secret,{expiresIn:"1h"}),//app=env file

//          // token: generateToken(updateUserProfile._id),
//       });
//     } else {
//       res.status(400);
//       throw new Error("User Not Found");
//     }
//    };

// // update profile
// export const updateCV = async (req, res) => {
//    // console.log(req.body);
//    const existingUser = await user.findOne({ email });
//     console.log(req.body);
//   if (existingUser) {
//    user.Discription = req.body.Discription ;
//    user.cv = req.body.cv; 
//    user.Certificates = req.body.Certificates ;
//    user.CollegeName = req.body.CollegeName ;
//    user.Major = req.body.Major; 
//    user.GraduationDate = req.body.GraduationDate ;
//    user.Language = req.body.Language ;

//    const updateUserCV = await user.save();
//    res.json({
//       Discription: updateCV.Discription, 
//       cv: updateCV.cv,
//       Certificates:updateCV.Certificates , 
//       CollegeName: updateCV.CreateProfile, 
//       Major:updateCV.Major, 
//       GraduationDate: updateCV.GraduationDate,
//       Language: updateCV.Language,
//      token: updateCV(updateUserCV._id),
//    });
//  } else {
//    res.status(400);
//    throw new Error("User Not Found");
//  }
// };

 
    