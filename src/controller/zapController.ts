import { Request , Response } from "express";
import Zap from "../db/models/zapModel";
export async function createZap(req : Request , res : Response):Promise<any> {
    try{
        const {zapTitle} = req.body

        const zap = await Zap.create({
            zapTitle : zapTitle
        })

        if(!zap){
            return res.json("failed to create zap")
        }

        return res.json({
            msg : "zap created",
            zap : zap
        })
    }catch(e : any){
        return res.json("internal server error")
    }
}