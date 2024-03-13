import express from 'express'
const router = express.Router()

import { getAllBlogs, getSingleBlog,postBlog,deleteBlog,getUserBlogs } from '../controllers/blogController.js'
import authenticate from '../middleware/authentication.js'
import authorize from '../middleware/authorization.js'


//router.use(authenticate)
//router.use(authorize)
router.get('/',getAllBlogs)
router.get('/my-blogs',getUserBlogs)
router.get('/:blogId',getSingleBlog)
router.post('/',postBlog)
router.delete('/:blogId',deleteBlog)

export default router