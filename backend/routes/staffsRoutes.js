import express from 'express'
import { getAllStaffs,createStaff } from '../controllers/staffsController.js';
const router = express.Router();


router.get('/', getAllStaffs);
router.get('/register',createStaff);

export default router;