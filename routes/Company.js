import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signinCompany, signupCompany , testCompany ,resetPassword,updateProofileCV ,deleteAccount,AddOpportunities} from '../controllers/Company.js';

router.post('/signinCompany',signinCompany );
router.post('/signupCompany', signupCompany);
router.get('/testCompany', testCompany);
router.post("/resetPassword", resetPassword);
router.post('/updateProofileCV', updateProofileCV);//CreateProfile/updateProfile
router.post('/deleteAccount', deleteAccount);
router.get('/AddOpportunities', AddOpportunities);

export default router;


