import express from 'express';
const router = express.Router();
// updateAccount, deleteAccount ه

import { signinCompany, signupCompany , testCompany ,resetPassword } from '../controllers/Company.js';

router.post('/signinCompany',signinCompany );
router.post('/signupCompany', signupCompany);
router.get('/testCompany', testCompany);
router.post("/resetPassword", resetPassword);

export default router;


