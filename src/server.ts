import express from "express"
import hookRoutes from "./routes/v0/hookRoutes"

import userRoutes from "./routes/v0/userRoutes"
import zapRoutes from "./routes/v0/zapRoutes"

const app = express()
app.use(express.json())

app.use("/api/v0/user" , userRoutes) 
app.use("/api/v0/zap" , zapRoutes )
app.use("/api/v0/trigger" , triggerRoutes) // admin routes -- create new trigger types 
//app.use("/api/v0/action" , actionRoutes) // admin routes -- create new action type
app.use("/api/v0/hooks" , hookRoutes)

app.listen(4000, () => {
    console.log("server started")
})