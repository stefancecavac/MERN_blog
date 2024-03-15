import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())

import blogRouter from './routes/blogRouter.js'
import userRouter from './routes/userRouter.js'
import cookieParser from 'cookie-parser'

app.use('/api/blogs' , blogRouter)
app.use('/api/user' , userRouter)





mongoose.connect(process.env.DB_URI)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`DB connected and server running on port ${process.env.PORT}`)
            })
        })
        .catch((error) => {
            console.log(error)
        })