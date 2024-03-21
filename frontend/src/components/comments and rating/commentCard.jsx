import { UseBlogContext } from '../../hooks/useBlogHook.jsx'



const CommentCard = ({ loading }) => {
    const { singleBlog } = UseBlogContext()

    return (
        loading ? (
            <p>loading...</p>
        ) : (
            <div className=' my-10 p-5'>
                {singleBlog.ratings.map((rating) => (
                    <div className='bg-gray-100 rounded-lg p-2 my-5' key={rating._id}>
                        <p className='text-green-500 font-bold'>{rating.userId && rating.userId.userName}</p>
                        <p className='my-5'>{rating && rating.comment}</p>

                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((index) => (
                                <div key={index}  >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" className={`w-5 h-5 text-gray-500 ${index <= rating.ratingNumber ? 'fill-amber-300' : ''}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                </div>
                            ))}
                        </div>


                    </div>

                ))}

            </div>
        )

    )
}

export default CommentCard