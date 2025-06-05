import { Request , Response } from "express"
import sequelize from "../db/models/sequelize"
import ZapRun from "../db/models/zapRun"
import ZapRunOutBox from "../db/models/zapRunOutbox"

export async function hooksController(req : Request , res : Response):Promise<any> {
    try{
    const userId = req.params.userId
    const zapId = parseInt(req.params.zapId)
    const body = req.body

    const t = await sequelize.transaction()

    try {
        const run = await ZapRun.create({ zapId : zapId,  metaData: body }, { transaction: t })
        await ZapRunOutBox.create({ zapRunId: run.id }, { transaction: t })

        await t.commit()
        res.status(201).json({ message: "ZapRun created", runId: run.id })
        
    } catch (e: any) {
        console.error("Error in zap run:", e)
        await t.rollback()
        res.status(500).json({ error: "Something went wrong" })
    }
    }catch(e : any){
        console.log("error in hooksController" , e.message)
        return res.status(500).json("Internal server error")
    }
}