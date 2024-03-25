import express from 'express'
const router = express.Router()

import { register, login,logout,updateUser } from '../controllers/userController.js'

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.put('/update/:userId',updateUser)


export default router