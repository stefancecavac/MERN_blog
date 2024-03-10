import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'

const register = async(req, res) => {
    const {userName , email , password} = req.body

    try{
        if(!userName || !email || !password){
            return res.status(400).json({error: 'please fill out all fields'})
        }
        
        if(!validator.isEmail(email)){
            return res.status(400).json({error: 'not a valid email'})
        }
        if(!validator.isStrongPassword(password)){
            return res.status(400).json({error: 'not a strong password'})
        }

        const emailExist = await User.findOne({email})
        if(emailExist){
            return res.status(400).json({error: 'email already in use'})
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)
        
        const user = await User.create({userName , email , password:hash})

        const token = jwt.sign({_id: user.id}, process.env.SECRET , {expiresIn:'3h'})
        res.cookie('token' , token , {httpOnly:true})
        res.status(201).json(user)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const login = async(req, res) => {
    const {email , password} = req.body

    try{
        if(!email || !password){
            return res.status(400).json({error: 'please fill out all fields'})
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error: 'incorrect email'})
        }

        const compare = await bcrypt.compare(password , user.password)
        if(!compare){
            return res.status(400).json({error: 'incorrect password'})
        }
     
        const token = jwt.sign({_id: user.id}, process.env.SECRET , {expiresIn:'3h'})

        res.cookie('token' , token , {httpOnly:true})
        res.status(201).json(user)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const logout = async(req, res) => {
    res.clearCookie('token')
    res.end()
}

export {register, login , logout}