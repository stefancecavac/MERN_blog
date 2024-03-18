import express from 'express'

import { postRating } from '../controllers/ratingController.js'
 
const router = express.Router()

router.post('/:blogId' , postRating)

export default router