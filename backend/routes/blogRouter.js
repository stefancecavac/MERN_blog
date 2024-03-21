import express from 'express'
const router = express.Router()

import { getAllBlogs, getSingleBlog,postBlog,deleteBlog,getUserBlogs,getTopBlogs } from '../controllers/blogController.js'
import authenticate from '../middleware/authentication.js'
import authorize from '../middleware/authorization.js'



router.get('/',getAllBlogs)
router.get('/topBlogs',getTopBlogs)
router.get('/my-blogs',authenticate,getUserBlogs)
router.get('/:blogId',getSingleBlog)


router.use(authenticate)
//router.use(authorize)

router.post('/',postBlog)
router.delete('/:blogId',deleteBlog)

export default router