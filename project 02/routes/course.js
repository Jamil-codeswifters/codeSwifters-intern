import express from "express"
import {courseWithStudents, createCourse} from "../controllers/course.js"
const app=express.Router()

app.post('/create',createCourse)
app.get('/get',courseWithStudents)


export default app 