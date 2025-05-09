
import {CourseModel,EnrollmentModel,StudentModel} from "../models/index.js"
export const createCourse = async (req, res) => {
  try {

    const { title, description } = req?.body;

    if (!title || !description) return res.status(402).json({ message: 'all fields is required' })

    const course = await CourseModel.create({ title, description });

    res.status(201).json({ success: true, course });
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ success: false, message: 'Internal server error', error });
  }
};

 export const courseWithStudents = async (req, res) => {
  try {
    const { studentId } = req.body
    const courseData = await EnrollmentModel.findOne({
      where: { studentId },
      include: [
        {
          model: StudentModel,
          // as: 'students'
        }
      ]
    });

    return res.status(200).json({ courseData })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}

