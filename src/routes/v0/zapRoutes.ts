import express from "express"
import { createZap } from "../../controller/zapController"
const router = express.Router()

router.post("/" , createZap)

export default router