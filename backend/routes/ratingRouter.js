import express from 'express'

import { postRating } from '../controllers/ratingController.js'
import authenticate from '../middleware/authentication.js'
const router = express.Router()

router.use(authenticate)
router.post('/:blogId' , postRating)

export default router