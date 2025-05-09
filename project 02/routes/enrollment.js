import express from "express"
import enrollStudent from "../controllers/enrollment.js"
const app=express.Router()

app.post('/',enrollStudent)
export default app 