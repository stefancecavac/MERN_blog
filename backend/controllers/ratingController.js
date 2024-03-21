import Rating from '../models/ratingModel.js'
import Blog from '../models/blogModel.js'

const postRating = async (req, res) => {
    const { ratingNumber, comment } = req.body
    const { blogId } = req.params
    const userId = req.user._id

    const wrongInput=[]

    if(!ratingNumber){
        wrongInput.push('ratingNumber')
    }
    if(!comment){
        wrongInput.push('comment')
    }

    if(wrongInput.length > 0){
        return res.status(400).json({error: 'please fill out field', wrongInput})
    }
    try {

        const rating = await Rating.create({ ratingNumber, comment, userId })
        const blog = await Blog.findByIdAndUpdate({ _id: blogId }, { $push: { ratings: rating } }).populate('ratings')
        .populate({
            path:'ratings',
            populate: {
                path:'userId'
            }
        })

        if (blog.ratings.length > 0) {
            let totalRating = 0
            blog.ratings.forEach(rating => {
                totalRating += rating.ratingNumber
            });
            blog.avgRating = totalRating / blog.ratings.length;
            
        } else {
            blog.avgRating = 0
        }
        res.status(200).json({blog ,wrongInput})
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export { postRating }