import Student from '../models/studentSchema.js';
import Course from '../models/courseSchema.js';
import Enrollment from '../models/enrollmentSchema.js';

export const enrollStudent = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await Student.findByPk(studentId);
    const course = await Course.findByPk(courseId);

    if (!student || !course) {
      return res.status(404).json({ success: false, message: 'Student or Course not found' });
    }

  await Enrollment.create({ studentId: student.id, courseId: course.id });
    res.status(200).json({ success: true, message: 'Enrollment successful' });
  } catch (error) {
    console.error('Error enrolling student:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export default enrollStudent