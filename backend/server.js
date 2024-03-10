import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

import blogRouter from './routes/blogRouter.js'

app.use('/api/blogs' , blogRouter)




mongoose.connect(process.env.DB_URI)
        .then(() => {
            app.listen(process.env.PORT, () => {
                console.log(`DB connected and server running on port ${process.env.PORT}`)
            })
        })
        .catch((error) => {
            console.log(error)
        })