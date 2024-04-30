import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signin, signup, test ,resetPassword,updateProofileCV,deleteAccount,ViewProfile,ViewCompanyPage} from '../controllers/user.js';
// ,updateProfile,updateCV
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/test', test);
router.post('/resetPassword', resetPassword);
router.post('/updateProofileCV', updateProofileCV);//CreateProfile/updateProfile
router.post('/deleteAccount', deleteAccount);
router.post('/ViewProfile', ViewProfile);
router.post('/ViewCompanyPage', ViewCompanyPage);




export default router;
