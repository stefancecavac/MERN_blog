import Blog from '../models/blogModel.js'
import mongoose from 'mongoose'

const getAllBlogs = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const pageSize = 6
    const { title } = req.query

    try {
        let query = {}

        if (req.query.tags) {
            const tags = req.query.tags.split(',')
            query.tags = { $all: tags }
        }
        if (title) {
            const titleRegexPattern = title.split('').join('\\s*') + '.*';
            const titleRegex = new RegExp('^' + titleRegexPattern.replace(/(\w)(\d)/, '$1\\s*$2'), 'i');
            query.title = { $regex: titleRegex };
        }


        const totalCount = await Blog.countDocuments(query)
        const totalPages = Math.ceil(totalCount / pageSize)
        const blogs = await Blog.find(query).sort({ createdAt: -1 })
            .populate('userId')
            .populate('ratings')
            .populate({
                path: 'ratings',
                populate: {
                    path: 'userId'
                }
            });

        if (blogs.length === 0) {
            return res.status(404).json({ error: 'no blogs found!' })
        }

        blogs.forEach(blog => {
            if (blog.ratings.length > 0) {
                let totalRating = 0
                blog.ratings.forEach(rating => {
                    totalRating += rating.ratingNumber
                });
                blog.avgRating = totalRating / blog.ratings.length;

            } else {
                blog.avgRating = 0
            }
        })

        if (req.query.sortOrder === 'asc') {
            blogs.sort((a, b) => b.avgRating - a.avgRating)
        }
        if (req.query.sortOrder === 'dsc') {
            blogs.sort((a, b) => a.avgRating - b.avgRating)
        }
        const blog = blogs.slice((page - 1) * pageSize, page * pageSize)

        res.status(200).json({ blog, page, totalPages })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getUserBlogs = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const pageSize = 6
    const userId = req.user._id

    try {
        const totalCount = await Blog.countDocuments()
        const totalPages = Math.ceil(totalCount / pageSize)
        const blog = await Blog.find({ userId })
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .sort({ createdAt: -1 })
            .populate('userId')
            .populate('ratings')

        if (!blog) {
            return res.status(404).json({ error: 'no blogs found!' })
        }

        blog.forEach(blog => {
            if (blog.ratings.length > 0) {
                let totalRating = 0
                blog.ratings.forEach(rating => {
                    totalRating += rating.ratingNumber
                });
                blog.avgRating = totalRating / blog.ratings.length;

            } else {
                blog.avgRating = 0
            }
        })


        res.status(200).json({ blog, page, totalPages })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getSingleBlog = async (req, res) => {
    const { blogId } = req.params

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.status(400).json({ error: 'not a valid mongo id' })
    }

    try {
        const blog = await Blog.findOne({ _id: blogId })
            .populate('userId')
            .populate('ratings')
            .populate({
                path: 'ratings',
                populate: {
                    path: 'userId'
                }
            });
        if (!blog) {
            return res.status(404).json({ error: 'no blogs found!' })
        }

        if (blog.ratings.length > 0) {
            let totalRating = 0
            blog.ratings.forEach(rating => {
                totalRating += rating.ratingNumber
            });
            blog.avgRating = totalRating / blog.ratings.length;

        } else {
            blog.avgRating = 0
        }



        res.status(200).json(blog)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getTopBlogs = async (req, res) => {
    try {
        const blog = await Blog.find().populate('ratings')

        blog.forEach(blog => {
            if (blog.ratings.length > 0) {
                let totalRating = 0
                blog.ratings.forEach(rating => {
                    totalRating += rating.ratingNumber
                })
                blog.avgRating = totalRating / blog.ratings.length

            } else {
                blog.avgRating = 0
            }
        })
        blog.sort((a, b) => b.avgRating - a.avgRating)

        const topBlogs = blog.slice(0, 5);

        res.status(200).json(topBlogs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const postBlog = async (req, res) => {
    const { title, content, tags, views } = req.body
    const userId = req.user._id

    const wrongInput = []

    try {
        if (!title) {
            wrongInput.push('title')
          
        }
        if (!content) {
            wrongInput.push('content')
        }
        if (tags.length === 0) {
            wrongInput.push('tags')
        }
    
        if(wrongInput.length > 0 ){
            return res.status(400).json({error: 'please fill out all fields' , wrongInput})
         
        }

        const blog = await Blog.create({ title, content, tags, views, userId })
        res.status(200).json(blog)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteBlog = async (req, res) => {
    const { blogId } = req.params

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.status(400).json({ error: 'not a valid mongo id' })
    }

    try {
        const blog = await Blog.findOneAndDelete({ _id: blogId })
        if (!blog) {
            return res.status(404).json({ error: 'no blogs found!' })
        }
        res.status(200).json(blog)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { getAllBlogs, getSingleBlog, postBlog, deleteBlog, getUserBlogs, getTopBlogs }
