import { col, fn } from "sequelize";
import { CourseModel, EnrollmentModel, StudentModel } from "../models/index.js";
import Student from "../models/studentSchema.js"

export const createStudent = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) return res.status(402).json({ message: "all fields is required" })

    const student = await Student.create({ firstName, lastName });

    res.status(201).json({ success: true, student });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const studentWithCourses = async (req, res) => {
  try {
    const { courseId } = req.body
    const student = await EnrollmentModel.findOne({
      where: { courseId },
      include: [
        {
          model: CourseModel,

        }
      ]
    });

    return res.status(200).json({ student })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error.message })
  }
}


export const getAllStdudentCount = async (req, res) => {
  try {
    const user = await StudentModel.findAll({
      attributes: [[fn('COUNT', col('id')), 'userCount']]
    });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
