import express from "express"
import { signup } from "../../controller/userController"

const router = express.Router()

router.post("/signup" , signup)
//router.post("/login" , login)

export default router