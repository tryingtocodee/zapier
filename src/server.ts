import express from "express"
import hookRoutes from "./routes/v0/hookRoutes"


const app = express()
app.use(express.json())

app.use("/api/v0/hooks" , hookRoutes)

app.listen(4000, () => {
    console.log("server started")
})