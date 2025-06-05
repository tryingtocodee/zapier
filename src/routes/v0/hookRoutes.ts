import express from "express"
import { hooksController } from "../../controller/hooksController"

const router = express.Router()

router.post("/:userId/:zapId" , hooksController)
export default router