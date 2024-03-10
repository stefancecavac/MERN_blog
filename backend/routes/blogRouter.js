import express from 'express'
const router = express.Router()

import { getAllBlogs, getSingleBlog,postBlog,deleteBlog } from '../controllers/blogController.js'
import authenticate from '../middleware/authentication.js'

router.use(authenticate)
router.get('/',getAllBlogs)
router.get('/:blogId',getSingleBlog)
router.post('/',postBlog)
router.delete('/:blogId',deleteBlog)

export default router