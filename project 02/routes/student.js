import express from "express"
import { createStudent, getAllStdudentCount, studentWithCourses } from "../controllers/student.js"
const app = express.Router()

app.post('/create', createStudent)
app.get('/', studentWithCourses)
app.get('/get', getAllStdudentCount)

export default app 