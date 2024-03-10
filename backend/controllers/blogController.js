import Blog from '../models/blogModel.js'
import mongoose from 'mongoose'

const getAllBlogs = async(req, res) => {
    try{
        const blog = await Blog.find(req.query).sort({createdAt:-1}).populate('userId')
        if(!blog){
            return res.status(404).json({error: 'no blogs found!'})
        }
        res.status(200).json(blog)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getUserBlogs = async(req, res) => {
    const userId = req.user._id
    try{
        const blog = await Blog.find({userId}).sort({createdAt:-1}).populate('userId')
        if(!blog){
            return res.status(404).json({error: 'no blogs found!'})
        }
     
        console.log(blog)
        res.status(200).json(blog)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getSingleBlog = async(req, res) => {
    const {blogId} = req.params

    if(!mongoose.Types.ObjectId.isValid(blogId)){
        return res.status(400).json({error: 'not a valid mongo id'})
    }

    try{
        const blog = await Blog.findOne({_id : blogId})
        if(!blog){
            return res.status(404).json({error: 'no blogs found!'})
        }
        res.status(200).json(blog)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const postBlog = async(req, res) => {
    const {title , content} = req.body
    const userId = req.user._id

    if(!title || !content){
        return res.status(400).json({error: 'please fill out all fields'})
    }

    try{
        const blog = await Blog.create({title , content ,userId})
        res.status(200).json(blog)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const deleteBlog = async(req, res) => {
    const {blogId} = req.params

    if(!mongoose.Types.ObjectId.isValid(blogId)){
        return res.status(400).json({error: 'not a valid mongo id'})
    }

    try{
        const blog = await Blog.findOneAndDelete({_id : blogId})
        if(!blog){
            return res.status(404).json({error: 'no blogs found!'})
        }
        res.status(200).json(blog)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

export {getAllBlogs, getSingleBlog, postBlog,deleteBlog , getUserBlogs}
