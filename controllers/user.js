import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user from '../models/user.js';

const secret = 'app';

// // Signin

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
// // Signup

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

// // ResetPassword

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

//  //  Complete Profile
  
// // update profile

export const updateProofileCV = async (req, res) => {
   const { email, ...updateData } = req.body;
   // console.log('req.body: ',req.body)
   user.findOneAndUpdate(
      { email: email }, // find user by his email
      updateData, // user data to be updated from req.body such as Certificates, CollegeName etc...
      { new: true }, // to return the opdated object
      (err, doc) => { // CallBack function
            if (err) {
               console.log("Something went wrong when updating data!");
               return res.status(400).json({message:'حدث خطأ من الخادم'});
            }if (!doc) {
               return res.status(404).json({ message: "User not found" });
            }
               console.log("User document  updated! :", doc);
               res.status(200).json({message:'تم التحديث بنجاح'});
         }
   );
};
// // delete profile

export const deleteAccount = async (req, res) => {
   try {

      const result = await user.deleteOne(user._id);
      return res.status(200).json({message:"تم حذف الحساب بنجاح"});

      } catch (error) {
      res.status(400) . send({ success: false,msg: error.message });
      };


};




//   View Student Profile
export const ViewProfile = async (req, res) => { 


};

//   View Company Page
export const ViewCompanyPage = async (req, res) => { 

};

//   Filter The Opportunities
export const FilterTheOpp = async (req, res) => { 

}

//   Search For The Opportunity
export const SearchForTheOpp = async (req, res) => { 
   const { query } = req.query;

   try {
     // Perform search based on the query
     const result = await Item.find({ name: { $regex: query, $options: 'i' } }); // Case-insensitive search
 
     res.json(result);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'An error occurred while searching.' });
   }
}


//   Registration in the opportunity
export const RegistrationInTheOppo = async (req, res) => { 
}

//   Discover Location
export const DiscoverLocation = async (req, res) => { 
};

//   View Request
export const ViewRequest = async (req, res) => { 
};

export const test = async (req, res) => { 
   // const existingUser = await user.find();
   res.json("HELLO");
};