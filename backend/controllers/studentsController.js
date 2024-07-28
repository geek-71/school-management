import Student from '../models/Student.js';

export const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    next(err);
  }
};

export const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findOne({id:req.params.id});
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    next(err);
  }
};

export const createStudent = async (req, res, next) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
};

// export const updateStudent = async (req, res, next) => {
//   try {
//     const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedStudent) {
//       return res.status(404).json({ message: 'Student not found' });
//     }
//     res.json(updatedStudent);
//   } catch (err) {
//     next(err);
//   }
// };

// export const deleteStudent = async (req, res, next) => {
//   try {
//     const deletedStudent = await Student.findByIdAndDelete(req.params.id);
//     if (!deletedStudent) {
//       return res.status(404).json({ message: 'Student not found' });
//     }
//     res.json({ message: 'Student deleted successfully' });
//   } catch (err) {
//     next(err);
//   }
// };
