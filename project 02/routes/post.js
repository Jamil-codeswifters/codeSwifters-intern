import express from "express"
import createPost from "../controllers/post.js"
const app=express.Router()

app.post('/create/post',createPost)

export default app


