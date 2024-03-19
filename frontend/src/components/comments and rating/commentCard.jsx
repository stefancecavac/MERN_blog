import { UseBlogContext } from '../../hooks/useBlogHook.jsx'

const CommentCard = () => {
    const { singleBlog } = UseBlogContext()

    return (
        <div>
            {singleBlog.ratings.map((rating) => (
                <div key={rating._id}>
                    <p>{rating.comment}</p>
                    <p>{rating.ratingNumber}</p>
                    <p>{rating.userId.userName}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentCard