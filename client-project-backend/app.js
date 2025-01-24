import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin : "http://localhost:5173",
    methods : "*",
    credentials : true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//router import statements
import userRouter from "./src/routes/userRouter.js"
import PujasRouter from "./src/routes/PujasRouter.js"

app.use("/api/v1/user" , userRouter);
app.use("/api/v1/puja", PujasRouter);

export {app}
