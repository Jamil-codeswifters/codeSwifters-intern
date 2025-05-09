import express from "express"
import { connectDb } from "./config/db.js"
import userRouter from "./routes/user.js"
import postRouter from "./routes/post.js"
import studentRouter from "./routes/student.js"
import courseRouter from "./routes/course.js"
import enrollmentRouter from "./routes/enrollment.js"
const app = express()
const port = process.env.PORT || '3000'
connectDb()

app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/post', postRouter)
app.use('/api/v1/student', studentRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/enroll', enrollmentRouter)

app.listen(port, () => console.log(`server is runing on this port :${port}`))