import express from "express"
import { createUserController, deleteUserInfo, getProfile, oneToManyRel, updateUserInfo } from "../controllers/user.js"
const app = express.Router()

app.post('/create', createUserController)
app.delete('/delete', deleteUserInfo)
app.put('/edit', updateUserInfo)
app.get('/profile',getProfile)
app.get('/',oneToManyRel)

export default app
