import User from "../db/models/userModel"
import { Request , Response } from "express"
export async function signup(req: Request, res: Response): Promise<any> {
    try {

        const { username, email, password } = req.body
        
        const user = await User.create({
            username: username,
            email: email,
            password: password
        })

        if (!user) {
            return res.json("failed to create user")
        }

        return res.json({
            msg: "new user created",
            user: user
        })

    } catch (e: any) {
        console.log("error in signup ", e.message)
        return res.json("internal server error")
    }
}