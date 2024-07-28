import express from 'express'
import { createStudent,getAllStudents,getStudentById } from '../controllers/studentsController.js';
const router = express.Router();


router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/register', createStudent);
// router.put('/:id',updateStudent);
// router.delete('/:id',deleteStudent);

export default router;
