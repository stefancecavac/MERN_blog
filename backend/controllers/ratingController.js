import Rating from '../models/ratingModel.js'
import Blog from '../models/blogModel.js'

const postRating = async (req, res) => {
    const { ratingNumber } = req.body
    const { blogId } = req.params

    try {
    
        const rating = await Rating.create({ ratingNumber })
        const blog = await Blog.findByIdAndUpdate({_id : blogId} , {$push : {ratings:rating}}) 
        res.status(200).json(blog)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export {postRating}