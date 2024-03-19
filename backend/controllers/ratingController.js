import Rating from '../models/ratingModel.js'
import Blog from '../models/blogModel.js'

const postRating = async (req, res) => {
    const { ratingNumber, comment } = req.body
    const { blogId } = req.params
    const userId = req.user._id

    try {

        const rating = await Rating.create({ ratingNumber, comment, userId })
        const blog = await Blog.findByIdAndUpdate({ _id: blogId }, { $push: { ratings: rating } })
        res.status(200).json(blog)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { postRating }