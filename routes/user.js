import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signin, signup, test ,resetPassword} from '../controllers/user.js';
// ,updateProfile,updateCV
router.post('/signin', signin);
router.post('/signup', signup);
router.get('/test', test);
router.post('/resetPassword', resetPassword);
// router.post('/CreateProfile', resetPassword);
// router.post('/updateProfile', updateProfile);
// router.post('/updateCV', updateCV);



export default router;
